from django.db import models
from django.utils.timezone import now
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
    pass


class InterWebsites(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField(max_length=500, unique=True)
    description = models.CharField(max_length=200)


class InterShip(models.Model):
    website = models.ForeignKey(InterWebsites, on_delete=models.CASCADE, related_name="fromWebsite")
    title = models.CharField(max_length=100, unique=False, null=False)
    kind = models.CharField(max_length=100, null=False)
    qualification = models.CharField(max_length=500, null=False)
    description = models.TextField(max_length=4000, null=False)
    scraped_on = models.DateTimeField(default=now)

    class Meta:
        ordering = ["-scraped_on"]

    def __str__(self):
        return self.title


class Review(models.Model):
    product = models.CharField(max_length=100, null=False)
    customer = models.CharField(max_length=100, null=False)
    rating = models.IntegerField(null=False)
    heading = models.CharField(max_length=100, null=False, default='')
    comment = models.TextField(max_length=6000, null=False, default='')
    scraped_on = models.DateTimeField(default=now)

    class Meta:
        ordering = ["scraped_on"]

    def __str__(self):
        return self.heading
