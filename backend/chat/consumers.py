from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer

from .llms import chain
from .models import Message


class ChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive_json(self, content):
        user = self.scope["user"]
        message = content["message"]
        print(message)
        await self.save_message(message, user)
        response = chain.invoke(message)
        await self.save_message(response, user, sent_by=Message.SentBy.CHATBOT)

    @database_sync_to_async
    def save_message(self, message, user, sent_by=None):
        Message.objects.create(content=message, user=user, sent_by=sent_by)
        self.send({"status": "loading"})
