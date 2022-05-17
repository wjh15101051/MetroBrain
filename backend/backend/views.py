from django.http import HttpResponse
from django.shortcuts import render


def test(request):
    return HttpResponse("test return")


def index(request):
    return render(request, 'index.html', {})


def station_static_data(request):
    return
