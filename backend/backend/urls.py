from django.contrib import admin
from django.urls import path
from tienda.views import CategoriaListAPIView, ProductoListAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/categorias/', CategoriaListAPIView.as_view(), name='categoria-list'),
    path('api/productos/', ProductoListAPIView.as_view(), name='producto-list'),
]