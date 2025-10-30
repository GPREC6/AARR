import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartData1Service } from '../cart-data';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {

  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartData1: CartData1Service) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartData1.getCartItems();
    this.total = this.cartData1.getTotal();
  }

  removeItem(index: number) {
    this.cartData1.removeItem(index);
    this.loadCart();
  }
}
