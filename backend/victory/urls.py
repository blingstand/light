from django.urls import path
from .views import VictoryViews


APP_NAME = 'victory'
urlpatterns = [ 
    path('code/', VictoryViews.as_view(), name='new')
]
