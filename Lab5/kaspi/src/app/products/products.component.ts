import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Стул C06, 80x46x40 см, белый',
      description: 'Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду, делая обстановку более естественной и «живой».',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p33/p2b/3187777.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p28/3187782.jpg?format=gallery-medium'
      ],
      rating: 4.8,
    },

    {
      name: 'Round Lab 1025 Dokdo пенка 150 мл',
      description: 'Очищающая пенка на основе морской воды мягко и бережно удаляет остатки макияжа и микропыль, которая незаметно оседает на нашем теле, обеспечивая нежное увлажнение, кожа приобретает чистый, здоровый и сияющий вид.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h3f/86248968290334.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h62/86248968323102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h4d/86248968355870.jpg?format=gallery-medium'
      ],
      rating: 4.9,
    },

    {
      name: 'Серьги MONTIE латунь, акрил, без вставок',
      description: 'Цвет материалазолотистый.Страна производительКитай.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa5/p5d/18715936.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/p5a/18715937.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/p56/18715938.jpeg?format=gallery-large'
      ],
      rating: 4.8,
    },

    {
      name: 'The Act Virgin лосьон для тела 300 мл',
      description: 'Молочко для тела глубоко питает и увлажняет благодаря натуральным маслам и экстрактам. Сладкий аромат вишни, чёрной смородины, розового грейпфрута и миндаля создаёт расслабляющую атмосферу спa.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h82/87239987003422.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hfd/h9a/87239987068958.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hb9/h16/87239987462174.jpg?format=gallery-large'
      ],
      rating: 4.9,
      
    },

    {
      name: 'NOW D-3 5000 IU капсулы 120 шт',
      description: 'В каждой порции Vitamin D-3 5000 IU от NOW содержится витамин Д3. Это та его форма, которая синтезируется в коже под воздействием солнечного света. При этом находится он в быстро усваиваемых гелевых капсулах.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1f/hce/69165915701278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/hb5/69165917929502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha0/hde/85364003340318.jpg?format=gallery-medium'
      ],
      rating: 5.0,
    },

    {
      name: 'Наушники OEM P9 серебристый',
      description: 'Наушники очень удобные и хорошо работает.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1f/hb2/84985846661150.jpg?format=gallery-medium'
      ],
      rating: 4.2,
    },

    {
      name: 'Вешалка напольная, izox, металл, 110x150 см, черный',
      description: 'Напольная металлическая вешалка представляет собой прочную и надёжную конструкцию, способную выдерживать значительный вес одежды. Изготовленная из высококачественного металла, стойка для одежды обеспечивает долговечность и стабильность.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/hc0/83825341530142.jpg?format=gallery-medium'
      ],
      rating: 4.8,
      
    },

    {
      name: 'Herbal Essences Глубокое питание шампунь 350 мл',
      description: 'Насладитесь тропическим раем вместе с брендом, вдохновленным силой природы. Шампунь Herbal Essences Аромат кокоса Глубокое питаниe увлажняет и питает очень сухие волосы, а аромат кокоса обеспечивает душевное равновесие и внутреннюю гармонию. ',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2c/hbc/86866546556958.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h6f/86866546622494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/h8e/86866547015710.jpg?format=gallery-medium'
      ],
      rating: 5.0,
    },
    {
      name: 'Celimax тонер Dual Barrier 150 мл',
      description: 'Барьерный кремовый тонер Celimax Dual Barrier Creamy Toner увлажняет, питает и восстанавливает, укрепляет естественный защитный слой и снижает чувствительность кожи к внешним раздражителям, успокаивая и смягчая. Средство устраняет шелушение и сухость.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/hcf/86640324050974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hef/h6e/86640643702814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/h66/86640324116510.jpg?format=gallery-medium'
      ],
      rating: 5.0,
    },

    {
      name: 'Welcos Confume Argan шампунь 750 мл',
      description: 'Шампунь для волос с аргановым маслом Confume Argan бережно очищает волосы и кожу головы, питает и укрепляет корни. Активизирует рост волос, предотвращает рассечение концов, придает объем и шелковистость',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h95/h3a/87214789525534.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h57/87214789656606.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/h7c/87214789722142.jpg?format=gallery-large'
      ],
      rating: 3.4,
    },
    {
      name: 'Патчи COSRX точечные Acne Pimple Master противовоспалительные 24 шт',
      description: 'Долой прыщи. Средство экстренной помощи Acne Pimple Master Patch - приклеив патчи на ночь, уже утром Вы увидите результат их работы - прыщи станут менее заметны.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha0/h4b/63933635067934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h7c/85427692535838.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h57/85427692601374.jpg?format=gallery-medium'
      ],
      rating: 4.7,
    },

    {
      name: 'Спрей TIGI Bed Head Superstar Queen for a day',
      description: 'Этот универсальный спрей тройного действия станет твоим ежедневным помощником в достижении объемных, густых и текстурированных волос. Добавляет ощущение густоты и плотности. Запоминает форму причёски без склеивания и утяжеления.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/heb/hf0/85758703468574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hbd/h64/85758703534110.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h77/85758703566878.jpg?format=gallery-large'
      ],
      rating: 4.4,
    },
  
  ]

  imgIndex: {[key: string]: number } = {};

  constructor() {
    this.products.forEach((product) => {
      this.imgIndex[product.name] = 0;
    });
  }

  nextImg(product: Product) {
    const currentIndex = this.imgIndex[product.name];
    const nextIndex = (currentIndex + 1) % product.imageUrls.length;
    this.imgIndex[product.name] = nextIndex;
  }

  prevImg(product: Product) {
    const currentIndex = this.imgIndex[product.name];
    const prevIndex = (currentIndex - 1 + product.imageUrls.length) % product.imageUrls.length;
    this.imgIndex[product.name] = prevIndex;
  }

// to send via w or t 
shareOnWhatsApp(product: Product) {
  const url = `https://api.whatsapp.com/send?text=Check out this product:`;
  window.open(url, '_blank');
}

shareOnTelegram(product: Product) {
  const url = `https://t.me/share/url?url=&text=Check out this product`;
  window.open(url, '_blank');
}
}