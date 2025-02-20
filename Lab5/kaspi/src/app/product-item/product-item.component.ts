import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() like = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
  @Output() shareWhatsApp = new EventEmitter<void>();
  @Output() shareTelegram = new EventEmitter<void>();

  onLike() {
    this.like.emit();
  }
  removeProduct(){
    this.remove.emit();
  }
  onShareWhatsApp() {
    this.shareWhatsApp.emit(this.product.link);
  }

  onShareTelegram() {
    this.shareTelegram.emit(this.product.link);
  }
}

