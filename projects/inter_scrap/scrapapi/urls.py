from django.urls import path
from . import views


urlpatterns = [
    path("", views.api_detail_view, name="api_detail_view"),
    path("<str:name>", views.search, name="search"),
    # path("str:website>/<str:kind>", views.specific, name="specific")
]
