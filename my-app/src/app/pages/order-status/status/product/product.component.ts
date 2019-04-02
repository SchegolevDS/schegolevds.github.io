import { Component, OnInit } from '@angular/core';
import { Products } from '../../../products/shopping-cart-products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = Products;

  constructor() { }

  ngOnInit() {
  }

}
