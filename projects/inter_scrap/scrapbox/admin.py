from django.contrib import admin
from .models import Review
# Register your models here.


class ReviewAdmin(admin.ModelAdmin):
    list_display = ['product', 'id', 'heading', 'rating', 'customer', 'scraped_on']


admin.site.register(Review, ReviewAdmin)