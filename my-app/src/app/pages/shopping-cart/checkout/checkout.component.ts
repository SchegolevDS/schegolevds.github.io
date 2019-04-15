import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { OrderService } from 'src/app/services/order.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  city:string;
  room:string;
  floor:string;
  entrance:string;
  comment:string;
  name:string;
  family:string;
  email:string;
  phone:string;

  constructor(private _cartService:ShoppingCartService,
              private _orderService:OrderService,
              private router: Router) { }

  Submit(): void {
    if(this.city != undefined && this.city.length > 0 &&
      this.name != undefined && this.name.length > 0 &&
      this.family != undefined && this.family.length > 0 &&
      this.email != undefined && this.email.length > 0 &&
      this.phone != undefined && this.phone.length > 0) {
      this.Undefined()
      this._orderService.order = {
        city: this.city + ',',
        room: this.room,
        floor: this.floor,
        entrance: this.entrance,
        comment: this.comment,
        name: this.name + ' ',
        family: this.family,
        email: this.email,
        phone: this.phone
      }
      this._orderService.orderProducts = this._cartService.cart;
      this._orderService.totalQuantity = this._cartService.totalQuantity;
      this._orderService.totalQuantityStr = this._cartService.totalQuantityStr;new Date();
      this._orderService.date = new Date();
      this.router.navigateByUrl('/order-status/order_number');
    }
  }

  Undefined() {
    if(this.room == undefined) {
      this.room = '';
    } else {
      this.room = this.room + ','
    }
    if(this.floor == undefined) {
      this.floor = '';
    } else {
      this.floor = this.floor + ','
    }
    if(this.entrance == undefined) {
      this.entrance = '';
    } else {
      this.entrance = this.entrance + ','
    }
  }

  ngOnInit() {

  }

}
