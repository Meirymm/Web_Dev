import {Component, OnInit} from '@angular/core';
import {Service} from "../app.service";
import {Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {setThrowInvalidWriteToSignalError} from "@angular/core/primitives/signals";
import {CommonModule} from "@angular/common";
import {CompanyComponent} from "../company/company.component";

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent implements OnInit{

  vacancies: Vacancy[] = [];
  companyName!: string

  constructor(private service: Service, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getVacancies(params['id']).subscribe(vacancies => {
        this.vacancies = vacancies;
      })
    })

    this.service.getCompanies().subscribe(companies => {
      this.companyName = companies[this.vacancies[0].company-1].name.toString();
    })
  }


}