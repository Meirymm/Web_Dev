import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl:'./product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[] = [];
  @Output() like = new EventEmitter<any>();
  @Output() remove = new EventEmitter<number>()
  @Output() shareWhatsApp = new EventEmitter<string>();
  @Output() shareTelegram = new EventEmitter<string>();

  removeProduct(index:number){
    this.remove.emit(index);
  }
}