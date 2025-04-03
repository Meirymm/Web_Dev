from django.shortcuts import get_object_or_404
from rest_framework import generics
from .models import Company, Vacancy
from .serializer import CompanySerializer, VacancySerializer


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