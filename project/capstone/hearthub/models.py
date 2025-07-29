from datetime import date
from django.contrib.auth.models import User
# from django.core.validators import MinValueValidator
from django.db import models

# Create your models here.

class WaterIntake(models.Model):
    amount = models.DecimalField(blank=True, null=True, decimal_places=0, max_digits=5)
    date = models.DateField(default=date.today)
    fluidrestriction = models.DecimalField(blank=True, null=True, decimal_places=0, max_digits=5, default=2000)
    # relationships
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="water_intakes")

    def __str__(self):
        return f"{self.date}: {self.amount} drank out of {self.fluidrestriction}"

class Weight(models.Model):
    weight = models.DecimalField(blank=True, null=True, decimal_places=0, max_digits=3)
    IBW = models.DecimalField(blank=True, null=True, decimal_places=1, max_digits=4, default=80)
    date = models.DateField(default=date.today)
    weight_change = models.CharField(max_length=100, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="weights")

    def __str__(self):
        return f"{self.date}: {self.user} records {self.weight}, with IBW {self.IBW}kg"

class Symptoms(models.Model):
    breathlessness = models.DecimalField(blank=True, null=True, decimal_places=0, max_digits=1)
    cough = models.DecimalField(blank=True, null=True, decimal_places=0, max_digits=1)
    leg_swelling = models.DecimalField(blank=True, null=True, decimal_places=0, max_digits=1)
    abdomen_swelling = models.DecimalField(blank=True, null=True, decimal_places=0, max_digits=1)
    sleeping = models.DecimalField(blank=True, null=True, decimal_places=0, max_digits=1)
    other = models.DecimalField(blank=True, null=True, decimal_places=0, max_digits=1)

    date = models.DateField(default=date.today)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="symptoms")

    symptom_alert = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.date}: {self.user} records breathlessness {self.breathlessness}, cough {self.cough}, sleep {self.sleeping}, leg swelling {self.leg_swelling}, abdomen swelling {self.abdomen_swelling}"
