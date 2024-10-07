from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.parsers import FormParser
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.viewsets import ViewSet

from .models import Profile
from .serializers import ProfileSerializer
from .serializers import SignupSerializer
from .serializers import UserSerializer


class SignupView(APIView):
    # queryset = Profile.objects.all()
    # serializer_class = SignupSerializer
    parser_classes = (FormParser, MultiPartParser)

    def post(self, request, format=None):
        serializer = SignupSerializer(data=request.data)
        serializer.photo = request.FILES.get("photo")
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    # queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(user=user)


class ProfileViewSet(ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(user=user)

    def perform_create(self, serializer):
        # Get the authenticated user
        user = self.request.user

        # Save with user_id and other fields from the request
        serializer.save(user_id=user.id, **self.request.data)
