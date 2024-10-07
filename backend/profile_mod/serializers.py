from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Profile


class SignupSerializer(serializers.Serializer):
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=20)
    first_name = serializers.CharField(max_length=150)
    last_name = serializers.CharField(max_length=150)
    birthday = serializers.DateField()
    password = serializers.CharField(max_length=128)
    photo = serializers.ImageField(required=False)

    class Meta:
        fields = ["email", "phone", "first_name", "last_name", "birthday", "password", "photo"]

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        print("validated data :", validated_data)
        user = User.objects.create_user(
            validated_data["email"], validated_data["email"], validated_data["password"]
        )
        profile = Profile.objects.create(
            user=user,
            phone=validated_data["phone"],
            birthday=validated_data["birthday"],
            photo=validated_data["photo"],
        )
        return profile


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email"]


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["user", "birthday", "photo"]

    user = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
