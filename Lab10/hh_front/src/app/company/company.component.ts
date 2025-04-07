import {Component, OnInit} from '@angular/core';
import {Service} from "../app.service";
import {Company} from "../models";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{

  companies: Company[] = []
  constructor(private service: Service) {
  }

  ngOnInit() {
    this.service.getCompanies().subscribe(companies => {
      console.log("✅ Компании получены:", companies);
      this.companies = companies;
    });
  }
}