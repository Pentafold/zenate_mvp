from django.urls import path
from .views import AppDashboard, AppSurvey, AppSignal

urlpatterns = [
    path('', AppDashboard.as_view()),
    path('survey/', AppSurvey.as_view(), name='survey'),
    path('signal/', AppSignal.as_view(), name='signals')
]