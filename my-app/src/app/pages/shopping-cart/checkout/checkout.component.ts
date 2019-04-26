import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';
import { CheckoutForm } from 'src/app/models/checkout-form';
import { Order } from 'src/app/models/order';

export class User{
    name: string;
    email: string;
    phone: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  checkoutForm = CheckoutForm;

  submit(){
    this._order.order = this.checkoutForm;
    this._order.orderProducts = this._cartService.cart;
    this._order.date = new Date();
    alert(this._order.date)
    this.router.navigateByUrl('/order-status/order_number');
  }

  constructor(private _cartService:ShoppingCartService,
              private _order: Order,
              private router: Router) { }

  ngOnInit() {

  }

}
