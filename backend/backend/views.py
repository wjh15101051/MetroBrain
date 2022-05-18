from django.http import HttpResponse
from django.shortcuts import render
from ToyPredSolve.ToyPredSolveOperations import add_new_point, get_point_class


def test(request):
    return HttpResponse("test return")


def index(request):
    return render(request, 'index.html', {})


def station_static_data(request):
    return


def toy_pred(request):
    if request.POST:
        data = request.POST
        print(data.get("type"))
        print(data.get("location_lng"))
        print(data)
        if data.get("type") == "add-new-point":
            add_new_point(data['location_lng'], data['location_lat'], data['cur_class'])
            print("add new point succeed!")
            return HttpResponse("add new point succeed!")
        else:
            print("wrong type in POST")
            return HttpResponse("wrong type in POST")
    elif request.GET:
        data = request.GET
        if data.get("type") == "get-point-class":
            c = get_point_class(data['location_lng'], data['location_lat'])
            print("get point class succeed")
            return HttpResponse(c)
        else:
            print("wrong type in GET")
            return HttpResponse("wrong type in GET")
    else:
        print("Neither POST nor GET")
        return HttpResponse("Neither POST nor GET")
