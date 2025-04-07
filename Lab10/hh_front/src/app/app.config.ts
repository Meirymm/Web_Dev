import {ApplicationConfig, NgModule} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';
import { routes } from './app.routes';
import {HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    VacancyComponent
  ],
  imports: [RouterModule.forRoot(routes),
  RouterModule,
  HttpClientModule,
  HttpClient],
  exports: [
    RouterModule,
    HttpClient
  ]
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};