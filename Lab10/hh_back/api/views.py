from rest_framework import generics
from .models import Company, Vacancy
from .serializer import CompanySerializer, VacancySerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
import json
from .serializer import CustomCompanySerializer

# List and Create Companies
class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


# Retrieve a Single Company
class CompanyDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'pk'  


# List all Vacancies of a specific Company
class CompanyVacancyListView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company = get_object_or_404(Company, pk=self.kwargs['pk'])
        return Vacancy.objects.filter(company=company)  


# List  Vacancies
class VacancyListCreateView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


# Retrieve a Single Vacancy
class VacancyDetailView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


# List Top 10 Vacancies by Salary
class TopTenVacanciesListView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]

#Function-based views
@csrf_exempt
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CustomCompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CustomCompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def company_detail(request, pk):
    company = get_object_or_404(Company, pk=pk)

    if request.method == "GET":
        serializer = CustomCompanySerializer(company)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = json.loads(request.body)
        serializer = CustomCompanySerializer(company, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"message": "Deleted successfully"}, status=204)
