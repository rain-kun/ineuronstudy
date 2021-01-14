from django.urls import path
from . import views

urlpatterns = [
    path("scrap/<str:search_string>", views.scrap, name="scrap"),
]
