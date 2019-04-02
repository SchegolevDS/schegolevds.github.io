import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-card-min',
  templateUrl: './product-card-min.component.html',
  styleUrls: ['./product-card-min.component.scss']
})

export class ProductCardMinComponent implements OnInit {
  @Input () product:any;
  inCart: boolean = true;

  constructor(public _cartService:ShoppingCartService) {

  }

  public addCart(product: any) {
    this._cartService.add(product);
  }

  ngOnInit() {

  }

}
