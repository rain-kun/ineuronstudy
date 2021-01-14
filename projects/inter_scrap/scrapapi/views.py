
# uses django rest framework
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# api imports
from django.views.decorators.csrf import csrf_exempt
# from django.core.paginator import Paginator
from django.views import View
from django.http import JsonResponse
import json
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
# views
from scrapbox.views import scrap
# models
from scrapbox.models import Review
# from .serializers import
from scrapbox.serializers import  ReviewSerializer
# authentications
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.


@login_required
# @authentication_classes([SessionAuthentication, BasicAuthentication])
# @permission_classes([IsAuthenticated])
def api_detail_view(request):
    if request.method == "GET":
        return render(request, "scrapapi/viewapi.html")
    else:
        return render(request, "scrapapi/viewapi.html", {
            "error": {"only GET method is allowed."}
        })

# api view for getting the reviews

@api_view(['GET','POST' ])
def search(request, name):
    if request.method == "GET":
        try:
            reviews = Review.objects.filter(product=name.replace(' ', ""))
            if reviews.count() <= 0:
                return Response({"error": "Data not found, scrap first."}, status=status.HTTP_404_NOT_FOUND)
        except Review.DoesNotExist:
            return Response({"error":"Data doesn't found, scrap first."}, status=status.HTTP_404_NOT_FOUND)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        return scrap(request)
    else:
        return Response({
            "error": "needs POST or GET request to work",
        }, status=status.HTTP_404_NOT_FOUND)



def specific(request, website, kind):
    pass
