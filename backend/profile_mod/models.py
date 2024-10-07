from django.conf import settings
from django.db import models

from .utils import rename_image


# Create your models here.
class Profile(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    birthday = models.DateField()
    photo = models.ImageField(upload_to=rename_image, null=True)

    def __str__(self):
        return self.user.username
