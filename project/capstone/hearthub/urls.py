from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("register", views.register, name="register"),
    path("logout", views.logout_view, name="logout"),

    path("water", views.water, name="water"),
    path("weight", views.weight, name="weight"),
    path("symptoms", views.symptoms, name="symptoms")
]
