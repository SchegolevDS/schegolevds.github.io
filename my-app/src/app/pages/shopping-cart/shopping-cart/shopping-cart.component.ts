import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartProduct: string;
  product: any;
  quantity = []

  constructor(private _cartService:ShoppingCartService) {
    this._cartService.totalQuantity = this._cartService.cart.length;
  }

  ngOnInit() {
    this._cartService.cartPrice = [0];
  }


}
