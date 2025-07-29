from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
import datetime

from .models import WaterIntake, Weight, Symptoms

# Create your views here.

# Cite - Web50


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "hearthub/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "hearthub/login.html")

# Cite - CS50 Web


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("login"))

# Citation - CS50 Web


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]

        # check passwords match
        if password != confirmation:
            return render(request, "hearthub/register.html", {
                "message": "Passwords do not match"
            })

        # Try creating new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "hearthub/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))

    # GET method
    return render(request, "hearthub/register.html")


def index(request):
    # render day
    x = datetime.datetime.now()
    dateTime = f'{x.strftime("%d")} {x.strftime("%b")} {x.strftime("%Y")}'

    try:
        user = request.user
        user = User.objects.get(id=request.user.id)
    except:
        print("No user data found")
        return HttpResponseRedirect(reverse('login'))

    # find the querySet of water intake for today, alongside a response message
    water, message = water_entry_today(user)
    print(water)

    # fill in querySet of weight for today, alongside a response message
    weight, message2 = weight_entry_today(user)
    print(weight)

    # find the querySet for symptoms today, alongside a response message
    symptoms, message3 = symptom_entry_today(user)
    print(symptoms)

    return render(request, "hearthub/index.html", {
        # all tabs
        'dateTitle': dateTime,
        "user": request.user,
        # water specific
        'fluidrestriction': water[0].fluidrestriction,
        'water_today': water[0].amount,
        'water_message': message,
        # weight-specific (weight_today, weight_change, weight_message)
        'IBW': weight[0].IBW,
        'weight_today': weight[0].weight,
        'weight_change': weight[0].weight_change,
        'weight_message': message2,
        # symptom specific
        'breathlessness': int(symptoms[0].breathlessness),
        'cough': symptoms[0].cough,
        'leg_swelling': symptoms[0].leg_swelling,
        'abdomen_swelling': symptoms[0].abdomen_swelling,
        'sleeping': symptoms[0].sleeping,
        'other': symptoms[0].other,
        'symptom_message': message3,
        'symptom_alert': symptoms[0].symptom_alert
    })


def water(request):
    # render day
    x = datetime.datetime.now()
    dateTime = f'{x.strftime("%d")} {x.strftime("%b")} {x.strftime("%Y")}'

    user = User.objects.get(id=request.user.id)

    # find the querySet of water intake for today, alongside a response message
    water, message = water_entry_today(user)
    print(water)

    if request.method == "POST":
        if 'FR' in request.POST:
            # updates fluid restriction for today and checks that it's valid
            FR = int(request.POST["FR"])
            user = request.user
            update_FR(FR, user)

        if 'water_today' in request.POST:
            adjust_water_intake(request.POST, water[0].amount, user)
        return HttpResponseRedirect(reverse("index"))

    return render(request, "hearthub/water.html", {
        'fluidrestriction': water[0].fluidrestriction,
        'water_today': water[0].amount,
        'water_message': message,
        'dateTitle': dateTime,
        "user": request.user
    })

def water_entry_today(user): # Returns today's water entry queryset [[amount, FR, date]]. Returns message (entry already exists or new data made)
    water = user.water_intakes.filter(date=datetime.date.today())

    if water.exists():
        # check querySet is not empty
        message = "Found user and querySet water is not empty"
        return water, message
    else:
        # save default values for amount drank today
        amount_drank = 0

        # save default value for fluid restriction today
        try:
            # find previous fluid-restriction amount
            FRs = user.water_intakes.filter(fluidrestriction__isnull=False)
            FR = int(FRs.last().fluidrestriction)
        except:
            # nil previous fluid-restriction amount exists
            FR = 2000

        # create new entry for water intake today
        new_water_entry = WaterIntake.objects.create(
            amount=amount_drank, fluidrestriction=FR, user=user)
        new_water_entry.save()
        water = user.water_intakes.filter(date=datetime.date.today())
        message = "New entry made for today"
        return water, message

def update_FR(FR, user): # validates and updates today's water entry value for FR
    # note date is auto-added for today

    # check for valid FR amount
    if FR is None or FR <= 0:
        print("Invalid fluid restriction")
        return render(request, "hearthub/index.html", {
            "message": "Invalid fluid restriction - not updated",
            'fluidrestriction': water[0].fluidrestriction
        })
    # update 'water' queryset for today
    WaterIntake.objects.filter(
        date=datetime.date.today(), user=user).update(fluidrestriction=FR)

def adjust_water_intake(data, intake, user): # updates today's water entry value for amount
    capacity = int(data["capacity"])
    if 'add_water' in data:
        new_amount = intake + capacity
    elif 'remove_water' in data:
        new_amount = intake - capacity
        if new_amount < 0:
            new_amount = 0
    print(new_amount)
    user.water_intakes.filter(
        date=datetime.date.today()).update(amount=new_amount)


def weight(request):
    user = User.objects.get(id=request.user.id)

    # user changes IBW or today's weight
    if request.method == "POST":
        if 'IBW' in request.POST:
            IBW = float(request.POST['IBW'])
            update_IBW(IBW, user)

    # user changes today's weight
        if 'weight_today' in request.POST:
            new_weight = int(request.POST['weight_today'])
            adjust_weight_today(new_weight, user)

    return HttpResponseRedirect(reverse('index'))

def weight_entry_today(user): # returns queryset [[weight, IBW, today]] and message (existing data found vs new queryset made)
    weight_today = user.weights.filter(date=datetime.date.today())
    # check if weight_today has any data
    if weight_today.exists():
        message = "Weight data found for user"
        return weight_today, message
    else:
        # find default value for ideal body weight, based on previous data
        IBW_records = user.weights.filter(IBW__isnull=False).last()
        try:
            new_IBW = IBW_records.IBW
            message = "New weight data getting added for user with previous weight"
        except:
            # set default value
            new_IBW = 80
            message = "New weight data getting added for user with default weight"
        # save new record
        new_weight_today = Weight.objects.create(IBW=new_IBW, user=user)
        new_weight_today.save()
        weight_today = Weight.objects.filter(user=user, date=datetime.date.today())
        return weight_today, message

def update_IBW(IBW, user): # validates and updates database IBW entry for today
    # check for valid amount
    weight = weight_entry_today(user)

    if IBW is None or IBW <= 0:
        print("Invalid IBW")
        return HttpResponseRedirect(reverse('index'))

    # update 'weight' queryset for today
    Weight.objects.filter(
        date=datetime.date.today(), user=user).update(IBW=IBW)

def adjust_weight_today(new_weight, user): # updates database for today's weight entry and weight_change (change from last input or Null)
    weight = weight_entry_today(user)

    # validate new_weight
    if new_weight is None or new_weight <= 0:
        print("Invalid weight")
        return render(request, "hearthub/index.html", {
            "weight_message": "Invalid weight - not updated",
            'IBW': weight[0].IBW,
            'weight_today': weight[0].weight
        })
    # save
    user.weights.filter(date=datetime.date.today()).update(weight=new_weight)

    # calculate change from last recorded weight
    previous_weights_all = user.weights.filter(weight__isnull=False).exclude(date=datetime.date.today()) # returns querySet
    previous_weight = previous_weights_all.last() # returns array

    if previous_weight is not None:
        weight_change = new_weight - previous_weight.weight
        if weight_change > 0:
            weight_change_message = f"🡅 {weight_change}kg"
        elif weight_change < 0:
            weight_change_message = f"🡇 {weight_change}kg"
        else:
            weight_change_message = None

        # save weight_change_message:
        user.weights.filter(date=datetime.date.today()).update(weight_change=weight_change_message)

    # calculate change from yesterday and the day before's record
    yesterday_weight = previous_weights_all.filter(date=datetime.date.today() - datetime.timedelta(days=1)).last() # returns array
    day_before_yesterday_weight = previous_weights_all.filter(date=datetime.date.today() - datetime.timedelta(days=2)).last() # returns array

    if yesterday_weight is not None and day_before_yesterday_weight is not None:
        if yesterday_weight.weight <= day_before_yesterday_weight.weight:
            weight_threshold_check = new_weight - yesterday_weight.weight
        else:
            weight_threshold_check = new_weight - day_before_yesterday_weight.weight
    elif yesterday_weight is not None and day_before_yesterday_weight is None:
        weight_threshold_check = new_weight - yesterday_weight
    elif yesterday_weight is None and day_before_yesterday_weight is not None:
        weight_threshold_check = new_weight - day_before_yesterday_weight.weight
    else:
        weight_threshold_check = None

    if weight_threshold_check is not None and weight_threshold_check >= 2:
        weight_change_message = f"🡅 {weight_change}kg: \n\r 🚩🚩🚩Over 2kg increase in 48 hours or less - check for symptoms of fluid overload and speak to your doctor"
        user.weights.filter(date=datetime.date.today()).update(weight_change=weight_change_message)


def symptoms(request):
    user = User.objects.get(id=request.user.id)

    if request.method == "POST" and 'saveSymptoms' in request.POST:
        breathlessness = int(request.POST['breathlessness'])
        cough = int(request.POST['cough'])
        leg_swelling = int(request.POST['leg_swelling'])
        abdomen_swelling = int(request.POST['abdomen_swelling'])
        sleeping = int(request.POST['sleeping'])
        other = int(request.POST['other'])

        update_symptoms(user, breathlessness, cough, leg_swelling, abdomen_swelling, sleeping, other)
        return HttpResponseRedirect(reverse('index'))

def symptom_entry_today(user): # returns queryset [ [symptoms, today] ] and message (...)
    symptoms_today = user.symptoms.filter(date=datetime.date.today())
    # check if weight_today has any data
    if symptoms_today.exists():
        message = "Symptoms data found for user"
        return symptoms_today, message
    else:
        # save new record
        new_symptoms_today = Symptoms.objects.create(user=user, breathlessness=1, cough=1, leg_swelling=1, abdomen_swelling=1, sleeping=1, other=1)
        new_symptoms_today.save()
        message = "New symptoms logged"
        symptoms_today = Symptoms.objects.filter(user=user, date=datetime.date.today())
        return symptoms_today, message

def update_symptoms(user, breathlessness, cough, leg_swelling, abdomen_swelling, sleeping, other):
    # if user yields any red flags: display medical alert message
    checking = [breathlessness, cough, leg_swelling, abdomen_swelling, sleeping, other]
    if 3 in checking:
        symptom_alert = "🚨 Medical Alert - Warning! Call your doctor or call 000"
    elif 2 in checking:
        symptom_alert = "⚠️ Pay Attention - Use Caution! Your symptoms may indicate a need to contact our doctor and changing medications"
    else:
        symptom_alert = "✅ Keep up the good work"

    Symptoms.objects.filter(date=datetime.date.today(), user=user).update(breathlessness=breathlessness, cough=cough, leg_swelling=leg_swelling, abdomen_swelling=abdomen_swelling,sleeping=sleeping, other=other, symptom_alert=symptom_alert)
