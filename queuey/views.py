import uuid

from queuey.models import Person
from django.http import JsonResponse
from django.shortcuts import render

def queue(request):
    list = Person.objects.all()
    queue = [person.to_json() for person in list]
    average_time = 5432322
    return JsonResponse({'averageAttentionTime': average_time, 'queue': queue})

def index(request):
    return render(request, 'index.html')


def join_queue(request):
    person = Person(name=request.POST['name'], uuid=uuid.uuid1())
    person.save()
    return JsonResponse({'status': 'ok'})