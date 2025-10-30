import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CartData1Service {
  private items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
}

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
 products = [
    { name: 'Laptop', price: 60000 },
    { name: 'Mobile', price: 20000 },
    { name: 'Headphones', price: 1500 }
  ];

  constructor(private cartData1: CartData1Service) {}

  addToCart(product: any) {
    this.cartData1.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
