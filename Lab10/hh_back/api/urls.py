from django.urls import path
from .views import (
    CompanyListCreateView,
    CompanyDetailView,
    CompanyVacancyListView,
    VacancyListCreateView,
    VacancyDetailView,
    TopTenVacanciesListView
)

urlpatterns = [
    path('companies/', CompanyListCreateView.as_view(), name='companies-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),  
    path('companies/<int:pk>/vacancies/', CompanyVacancyListView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListCreateView.as_view(), name='vacancies-list'),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesListView.as_view(), name='top-ten-vacancies'),
]
