from rest_framework import serializers

from .models import InterWebsites, Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'product', 'customer', 'heading',
                  'rating', 'comment', 'scraped_on',)
        read_only_fields = ('scraped_on',)

