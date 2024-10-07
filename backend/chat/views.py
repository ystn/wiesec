from django.shortcuts import render
from rest_framework import permissions
from rest_framework import viewsets

from .models import Message
from .serializers import MessageSerializer


# Create your views here.
class MessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    # queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        return Message.objects.filter(user=user)

    def perform_create(self, serializer):
        # Get the authenticated user
        user = self.request.user

        # Save with user_id and other fields from the request
        serializer.save(user_id=user.id, **self.request.data)
