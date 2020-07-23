from django.urls import path
from django.conf.urls import url, include
from ping import views

urlpatterns = [
    #path('admin/', admin.site.urls),
    url(r'^$', views.index),
]