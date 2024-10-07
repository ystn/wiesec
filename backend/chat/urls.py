from django.urls import include
from django.urls import path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r"message", views.MessageViewSet, basename="message")

urlpatterns = router.urls
