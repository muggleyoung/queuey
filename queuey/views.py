from queuey.models import Person
from django.http import JsonResponse

def index(request):
    a = Person(name="mei", uuid="21234567890")
    b = Person(name="yang", uuid="11234567890")
    list = Person.objects.all()
    queue = [person.to_json() for person in list]
    return JsonResponse({'queue': queue})
