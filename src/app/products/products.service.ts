import { Injectable } from '@angular/core';
import { Products } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product;
  products: Products[] = [
    new Products(1, 'Samsung Galaxy Note20 Ultra', 'Awesome Battery: 5,000 mAh Battery', 1000),
    new Products(2, 'Phone XL', 'A large phone with one of the best screens.', 400),
    new Products(3, 'Phone Mini', 'A great phone with one of the best cameras', 500),
    new Products(4, 'Phone Standard', 'Get Upto ₹500 off with Paytm', 790),
    new Products(5, 'Samsung Galaxy A21s', 'Awesome Screen: 16.63cm (6.5") HD+ Infinity-O Display', 900),
  ];

  cartProducts: Products[] = [];
  constructor() { }

  getProducts(): Products[] {
    return [...this.products];
  }

  addToCart(product): void {
    this.cartProducts.push(product);
  }

  getCartProducts(): Products[] {
    return [...this.cartProducts];
  }

  getProductById(productId) {
    return this.products[productId];
  }
}
