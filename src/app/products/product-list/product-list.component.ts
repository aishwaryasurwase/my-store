import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products.component';
import { Products } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Products[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onShare(): void {
    window.alert('The product has been shared.');
  }

  onNotify(): void {
    window.alert('You will be informed when the product goes on sale.');
  }
}
