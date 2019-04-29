import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shoppingcart-indicator',
  templateUrl: './shoppingcart-indicator.component.html',
  styleUrls: ['./shoppingcart-indicator.component.scss']
})
export class ShoppingcartIndicatorComponent implements OnInit {
  cartQuantityEmpty:boolean;

  _cartQuantityEmpty() {

  }
  constructor(private _cartService:ShoppingCartService) {

    this._cartService.totalQuantity = this._cartService.cart.length;
  }

  ngOnInit() {}

}
