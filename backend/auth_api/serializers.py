from rest_framework import serializers

from . import models


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ["user", "birthday", "photo"]

    user = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
