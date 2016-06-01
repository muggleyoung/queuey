from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Queue(models.Model):
    queue_number = models.IntegerField(default = 0)
    join_time = models.DateTimeField('join time')

