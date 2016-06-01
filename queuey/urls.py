from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^queue$', views.queue, name='queue'),
    url(r'^join_queue$', views.join_queue, name='join_queue'),
]