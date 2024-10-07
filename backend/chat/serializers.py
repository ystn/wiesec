from django.core.exceptions import FieldDoesNotExist
from rest_framework import serializers

from . import models


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Message
        fields = ["id", "content", "status", "sent_by", "user", "created_at"]

    user = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    def to_representation(self, instance):
        """
        Overwrites choices fields to return their display value instead of their value.
        """
        data = super().to_representation(instance)
        for field in data:
            try:
                if instance._meta.get_field(field).choices:
                    data[field] = getattr(instance, "get_" + field + "_display")()
            except FieldDoesNotExist:
                pass
        return data
