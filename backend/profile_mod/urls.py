from django.urls import path
from rest_framework import routers

from .views import ProfileViewSet
from .views import SignupView
from .views import UserViewSet

router = routers.DefaultRouter()
router.register(r"profile", ProfileViewSet, basename="profile")
router.register(r"user", UserViewSet, basename="user")

urlpatterns = [path("signup/", SignupView.as_view())] + router.urls
