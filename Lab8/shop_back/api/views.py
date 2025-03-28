from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from .models import Product, Category
from django.http import JsonResponse

def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)

def product_detail(request, id):
    product = get_object_or_404(Product, pk=id)
    data = {'product': {
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active
    }}
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)

def product_list(request):
    is_active = request.GET.get('is_active')  
    
    if is_active is not None:  
        products = Product.objects.filter(is_active=is_active.lower() == 'true')  
    else:
        products = Product.objects.all()  

    data = {'products': list(products.values())}
    return JsonResponse(data)



def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    data = {'category': {
        'name': category.name
    }}
    return JsonResponse(data)

def category_products(request, id):
    category = get_object_or_404(Category, pk=id)
    products = Product.objects.filter(category=category)
    data = {'products': list(products.values())}
    return JsonResponse(data)