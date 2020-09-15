import { Component, OnInit } from '@angular/core';
import { Products } from '../products/products.model';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  cartProducts: Products[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  checkout(): void {
    this.cartProducts = this.productsService.getCartProducts();
    console.log('Cart items', this.cartProducts);
  }
}
