# flake8: noqa
from rest_framework.authentication import TokenAuthentication as DJTokenAuthentication


class TokenAuthentication(DJTokenAuthentication):
    keyword = "Bearer"
