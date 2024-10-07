from django.conf import settings
from django.db import models


# Create your models here.
class Parent(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.get_full_name()


class Child(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    parent = models.ForeignKey(Parent, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.user.get_full_name()
