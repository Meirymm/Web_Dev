import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy } from './models';
import {CrossOrigin} from "@angular-devkit/build-angular";

@Injectable({
  providedIn: 'root'
})
export class Service {

  private API_URL = "http://localhost:8000/api/"

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.API_URL + 'companies/?format=json');
  }

  getVacancies(id: number): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(this.API_URL + `companies/${id}/vacancies/?format=json`);
  }
}