from channels.auth import AuthMiddlewareStack
from channels.db import database_sync_to_async
from channels.middleware import BaseMiddleware
from django.contrib.auth.models import AnonymousUser
from rest_framework.authtoken.models import Token


class TokenAuthMiddleware(BaseMiddleware):
    """
    Token authorization middleware for Django Channels 2
    """

    keyword = "Bearer"

    async def __call__(self, scope, receive, send):
        headers = dict(scope["headers"])
        if b"authorization" in headers:
            authorization_header = headers[b"authorization"].decode()
            scope["user"] = await self.get_user(authorization_header)
        return self.inner(scope, receive, send)

    @database_sync_to_async
    def get_user(self, authorization_header):
        try:
            token_name, token_key = authorization_header.split()
            if token_name == "Bearer":
                token = Token.objects.get(key=token_key)
                user = token.user
        except Token.DoesNotExist:
            user = AnonymousUser()
        return user


def TokenAuthMiddlewareStack(inner):
    return TokenAuthMiddleware(AuthMiddlewareStack(inner))
