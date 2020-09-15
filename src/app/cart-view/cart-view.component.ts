import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Products } from '../products/products.model';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  cartProducts: Products[] = [];
  placeOrder = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.cartProducts = this.productsService.getCartProducts();
  }
  onSubmit(form: NgForm): void {
    window.alert('Your order placed successfully!');
    form.reset();
    this.placeOrder = false;
  }
}
