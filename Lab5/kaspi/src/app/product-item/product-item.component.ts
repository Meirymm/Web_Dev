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

  liked = false;
  ngOnInit() {
    const savedLikes = localStorage.getItem(`likes_${this.product.id}`);
    const savedLiked = localStorage.getItem(`liked_${this.product.id}`);

    if (savedLikes !== null) {
      this.product.likes = Number(savedLikes); 
    }

    if (savedLiked !== null) {
      this.liked = savedLiked === 'true'; 
    }

  }
  onLike() {
    if (this.liked) {
      this.product.likes -= 1; 
    } else {
      this.product.likes += 1; 
    }
    this.liked = !this.liked;
    localStorage.setItem(`likes_${this.product.id}`, String(this.product.likes));
    localStorage.setItem(`liked_${this.product.id}`, String(this.liked));
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

