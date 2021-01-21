from django.urls import path
from . import views

urlpatterns = [
    path("<str:search_string>/", views.scrap, name="scrap"),
]
