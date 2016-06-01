from __future__ import unicode_literals

from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=90)
    uuid = models.CharField(max_length=20)

    def to_json(self):
        return {'name': self.name, 'uuid': self.uuid}
