from django.shortcuts import render

# Create your views here.
from queuey.models import Queue

def index(request):
    return render(request, 'index.html')

def get_queue(request):
    queue_list = Queue.objects.order_by('join_time')
    return render(request, 'index.html', queue_list)
