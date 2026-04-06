import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [

    {
      id: 1,
      name: 'iPhone 13',
      description: 'Popular Apple phone with good camera and battery.',
      price: 350000,
      rating: 4.8,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021',
      images: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-blue-select-2021',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pink-select-2021'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },

    {
      id: 2,
      name: 'AirPods Pro',
      description: 'Wireless earbuds with noise cancelling.',
      price: 120000,
      rating: 4.7,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22',
      images: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22_AV2',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22_AV3'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-102056182/'
    },

    {
      id: 3,
      name: 'MacBook Air M1',
      description: 'Light laptop for study and coding.',
      price: 480000,
      rating: 4.9,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-m1-2020',
      images: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-m1-2020',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m1-256gb-100797845/'
    },

    {
      id: 4,
      name: 'Samsung Galaxy A51',
      description: 'Android phone with AMOLED display.',
      price: 130000,
      rating: 4.5,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/kz/galaxy-a51',
      images: [
        'https://images.samsung.com/is/image/samsung/p6pim/kz/galaxy-a51',
        'https://images.samsung.com/is/image/samsung/p6pim/kz/galaxy-a51-black',
        'https://images.samsung.com/is/image/samsung/p6pim/kz/galaxy-a51-blue'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a51-64gb-chernyi-100419423/'
    },

    {
      id: 5,
      name: 'PlayStation 5',
      description: 'Next-gen console for gaming.',
      price: 420000,
      rating: 4.9,
      image: 'https://m.media-amazon.com/images/I/61-pBL9c2VL._AC_SL1500_.jpg',
      images: [
        'https://m.media-amazon.com/images/I/61-pBL9c2VL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71h8b2n7JpL._AC_SL1500_.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-100746577/'
    },

    {
      id: 6,
      name: 'Apple Watch Series 7',
      description: 'Smart watch with fitness tracking.',
      price: 180000,
      rating: 4.6,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-series7',
      images: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-series7',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-series7-2',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-series7-3'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-7-104920982/'
    },

    {
      id: 7,
      name: 'iPad 9',
      description: 'Tablet for study and watching videos.',
      price: 210000,
      rating: 4.6,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-9th-gen',
      images: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-9th-gen',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-9th-gen-2',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-9th-gen-3'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-9-2021-64gb-104154567/'
    },

    {
      id: 8,
      name: 'Logitech Mouse',
      description: 'Simple wireless mouse.',
      price: 9000,
      rating: 4.4,
      image: 'https://resource.logitech.com/w_800,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/m185/gallery/m185-gallery-1.png',
      images: [
        'https://resource.logitech.com/w_800,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/m185/gallery/m185-gallery-1.png',
        'https://resource.logitech.com/w_800,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/m185/gallery/m185-gallery-2.png',
        'https://resource.logitech.com/w_800,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/m185/gallery/m185-gallery-3.png'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-m185-910-002235-100000829/'
    },

    {
      id: 9,
      name: 'Mechanical Keyboard',
      description: 'RGB keyboard for gaming.',
      price: 25000,
      rating: 4.3,
      image: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg',
      images: [
        'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71K1WJ9xFhL._AC_SL1500_.jpg'
      ],
      link: 'https://kaspi.kz/shop/'
    },

    {
      id: 10,
      name: 'Xiaomi Electric Scooter',
      description: 'Electric scooter for city.',
      price: 160000,
      rating: 4.4,
      image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-3/01.png',
      images: [
        'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-3/01.png',
        'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-3/02.png',
        'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-3/03.png'
      ],
      link: 'https://kaspi.kz/shop/'
    }

  ];

}
