from django.db import models

# Create your models here.
class ResponseLog(models.Model):
    datetime = models.DateTimeField(auto_now=True)
    type = models.CharField(max_length=500, null=False)
    value = models.CharField(max_length=500, null=False)

class Signal(models.Model):
    date = models.DateField(auto_now=True)
    signal = models.CharField(max_length=500, null=True)
