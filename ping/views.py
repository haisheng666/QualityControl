#coding=utf-8
from django.shortcuts import render

def index(request):
    query_list = [ {'hostid': 81,'cpu': 9,'memory': 7,'delay': 0,'name': 'X_ZW_10506_CT_431'},{'hostid': 82,'cpu': 17,'memory': 10,'delay': 0,'name': 'X-M6-5820-CT-B-184'}]
    #query_list = {'Alice': '2341', 'Beth': '9102', 'Cecil': '3258'}
    #return render(request, 'HuaNan/index.html',query_list)
    #data = [1,2,3,4]
    #return render(request, 'HuaNan/index.html', {'data': data})
    return render(request, 'ping/index.html', {'query_list': query_list}) #传递列表写法，若是传递字典直接写即可，不用键值对
