from django.contrib import admin
from .models import WaterIntake, Weight, Symptoms

# Register your models here.
admin.site.register(WaterIntake)
admin.site.register(Weight)
admin.site.register(Symptoms)
