import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = ["Gadgets", "Beauty", "Clothes", "Gifts for the holidays"];
  selectedCategory = 'All';
  products:any[] = [
    { 
      id:1,
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      rating: 5.0,
      likes: 0,
      category:'Gadgets'
    },

    {
      id:2,
      name: 'Смартфон Samsung Galaxy A06 4 ГБ/64 ГБ черный',
      description: 'Операционная система Android 14',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h84/87014305824798.png?format=gallery-medium',
      rating: 4.9,
      likes: 0,
      category:'Gadgets'
    },

    {
      id:3,
      name: 'Смартфон OPPO A78 8 ГБ/256 ГБ черный',
      description: 'Смартфон имеет экран AMOLED с разрешением FHD+, на который выводятся детализированные изображения с естественной цветопередачей. ',
      image:'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=gallery-medium',
      rating: 4.8,
      likes: 0,
      category:'Gadgets'
    },

    {
      id:4,
      name: 'Смартфон Apple iPhone 15 128Gb голубой',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium',
      rating: 4.9,
      likes: 0,
      category:'Gadgets'
    },

    {
      id:5,
      name: 'Смартфон Realme Note 50 4 ГБ/128 ГБ черный',
      description: 'Смартфон Realme Note 50 диагональю 6.7" выполнен в голубом корпусе с защитой по стандарту IP54. ',
      image:'https://resources.cdn-kaspi.kz/img/m/p/hd6/hcf/84991826722846.png?format=gallery-medium',
      rating: 5.0,
      likes: 0,
      category:'Gadgets'
    },

    {
      id:6,
      name: 'Ollin Professional Perfect Hair 15 в 1 крем-спрей 250 мл',
      description: 'Уникальное многофункциональное средство заменит вам целых 15 продуктов для ухода за волосами. ',
      image:'https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Beauty'
    },

    {
      id:7,
      name: 'Herbal Essences Глубокое питание шампунь 350 мл',
      description: 'Насладитесь тропическим раем вместе с брендом, вдохновленным силой природы.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/hbc/86866546556958.jpg?format=gallery-medium',
      rating: 5.0,
      likes: 0,
      category:'Beauty'
    },
    {
      id:8,
      name: 'Celimax тонер Dual Barrier 150 мл',
      description: 'Барьерный кремовый тонер Celimax Dual Barrier Creamy Toner увлажняет, питает и восстанавливает, укрепляет естественный защитный слой и снижает чувствительность кожи к внешним раздражителям, успокаивая и смягчая.',
      image:'https://resources.cdn-kaspi.kz/img/m/p/hb5/hcf/86640324050974.jpg?format=gallery-medium',
      rating: 5.0,
      likes: 0,
      category:'Beauty'
    },

    {
      id:9,
      name: 'Welcos Confume Argan шампунь 750 мл',
      description: 'Шампунь для волос с аргановым маслом Confume Argan бережно очищает волосы и кожу головы, питает и укрепляет корни. ',
      image:'https://resources.cdn-kaspi.kz/img/m/p/h95/h3a/87214789525534.jpg?format=gallery-large',
      rating: 3.4,
      likes: 0,
      category:'Beauty'
    },
    {
      id:10,
      name: 'Патчи COSRX точечные Acne Pimple Master 24 шт',
      description: 'Долой прыщи. Средство экстренной помощи Acne Pimple Master Patch - приклеив патчи на ночь, уже утром Вы увидите результат их работы - прыщи станут менее заметны.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h4b/63933635067934.jpg?format=gallery-medium',
      rating: 4.7,
      likes: 0,
      category:'Beauty'
    },

    {
      id:11,
      name: 'Носки 916721 1 пара белый 35-41',
      description: 'Уникальное многофункциональное и смешное носочки заменит вам целых 15 здоровых жизнь. ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h93/83857662935070.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Clothes'
    },
    {
      id:12,
      name: 'Футболка черный',
      description: 'Эта постиранная хлопковая футболка изготовлена из высококачественного хлопка.  ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h20/85825436712990.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Clothes'
    },
    {
      id:13,
      name: 'Толстовка Urban Outfit черный',
      description: 'Зип худи мягкая без принта - идеальный выбор худи для мужчин, женщин, подростков, мальчиков, девочек школьного возраста, детей.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p49/pb2/22786850.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Clothes'
    },
    {
      id:14,
      name: 'Жилет SHEIN черный',
      description: 'Жилет свободного кроя. Оверсайз. Размер L подойдёт на 46 размер.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h13/hf2/85143754670110.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Clothes'
    },
    {
      id:15,
      name: 'Пижама белый',
      description: 'Пижама очень мягкая и удобная.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h32/87181597409310.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Clothes'
    },
    {
      id:16,
      name: 'Набор воздушных шаров Falali фольгированный 13 шт',
      description: 'Растяжка из шаров Happy Birthday. В комплекте идет: лента , трубочка для надувания . Размер 16 см 40 дюймов',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/hc0/86126839693342.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Gifts for the holidays'
    },
    {
      id:17,
      name: 'Клубника в шоколаде 12 штук',
      description: 'Очень вкусная и сладкая сладость,12 штук в одном наборе.  ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/he8/68627938377758.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Gifts for the holidays'
    },
    {
      id:18,
      name: 'Набор воздушных шаров с рисунком 44 шт',
      description: 'Растяжка из шаров Happy Birthday. В комплекте идет: лента , трубочка для надувания . Размер 16 см 40 дюймов',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc3/h3e/85350458851358.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Gifts for the holidays'
    },
    {
      id:19,
      name: 'Best Wishes WEST 1 женский набор',
      description: 'Кулон с надписью «я люблю тебя» на 100 языках. Сделайте приятный подарок Вашим близким .',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe7/p5c/13492928.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Gifts for the holidays'
    },
    {
      id:20,
      name: 'Набор бонбоньерок без наполнения 25 шт 11 см',
      description: 'набор бонбоньерок количество в упаковке 25.',
      image:'https://resources.cdn-kaspi.kz/img/m/p/h03/h2c/67017816506398.jpg?format=gallery-medium',
      rating: 4.2,
      likes: 0,
      category:'Gifts for the holidays'
    }
  ];
  
  filteredProducts: any[] = this.products;

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
    
  }
  
  onLike(product: any) {
    product.likes += 1;
  }
  onRemove(index: number) {
    this.filteredProducts.splice(index, 1);
  }
  
  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${link}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${link}`, '_blank');
  }
}