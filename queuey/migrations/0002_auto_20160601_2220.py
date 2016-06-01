# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-06-01 20:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('queuey', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.IntegerField(default=0)),
                ('uuid', models.CharField(max_length=20)),
            ],
        ),
        migrations.DeleteModel(
            name='Queue',
        ),
    ]