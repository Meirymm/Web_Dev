import { Component } from '@angular/core';
import { ProductsComponent } from "./products/products.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ProductsComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaspi-products';
}