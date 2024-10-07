from django.conf import settings
from django.db import models


# Create your models here.
class Message(models.Model):

    class Status(models.TextChoices):
        SENT = "S"
        READ = "R"

    class SentBy(models.TextChoices):
        USER = "U"
        CHATBOT = "C"

    content = models.TextField()
    status = models.CharField(choices=Status, max_length=1, default=Status.SENT)
    sent_by = models.CharField(choices=SentBy, max_length=1, default=SentBy.USER)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.content} | {self.user.get_full_name()}"
