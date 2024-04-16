from django.shortcuts import render
from django.views import View
from zocialfi.models import *
from django.http import HttpResponse
import json
from datetime import date

balance = 0
# Create your views here.
class AppDashboard(View):
    def get(self, request):
        response = render(request, 'dashboard.html', {'balance' : balance})
        return HttpResponse(response)
class AppSurvey(View):
    def post(self, request):
        data = json.loads(request.body) 
        ResponseLog.objects.create(type = data['type'], value = data['value'])
        return HttpResponse(json.dumps({'message': 'Success'}),status=200)
class AppSignal(View):
    def get(self, request):
        signal = Signal.objects.all().order_by('-date').first()
        data = json.dumps({'signal': signal.signal})
        return HttpResponse(data, status=200)