import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cart = [];
  cartID = [];
  cartPrice = [];
  cartSum: number;
  totalQuantity: any;
  totalQuantityStr: string = 'Товар';
  totalQuantityEmpty:boolean;

  constructor() {
    if (JSON.parse(localStorage.getItem('Shopping-cart-Product')) != null) {
      this.cart = JSON.parse(localStorage.getItem('Shopping-cart-Product'));
    }
    if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
      this.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
    }
//    if (JSON.parse(localStorage.getItem('Shopping-cart-price')) != null) {
//      this.cartPrice = JSON.parse(localStorage.getItem('Shopping-cart-price'));
//    }
  }

  public add(product) {
    function cartID(value) {
      return value == product.id;
    }
    if (this.cartID.filter(cartID) == product.id) {
    }
    if (this.cartID.filter(cartID) != product.id) {
      this.cart.push(product);
      this.cartID.push(product.id);
      localStorage.setItem('Shopping-cart-Product', JSON.stringify(this.cart));
      localStorage.setItem('Shopping-cart-ProductID', JSON.stringify(this.cartID));
    }
    this.totalQuantity = this.cart.length;
    if (this.totalQuantity == 0) {
      this.totalQuantityEmpty = true;
    } else {
      this.totalQuantityEmpty = false;
    }
  }

  public delete (id) {
  this.cart.splice(id, 1);
  this.cartID.splice(id, 1);
  localStorage.setItem('Shopping-cart-Product', JSON.stringify(this.cart));
  localStorage.setItem('Shopping-cart-ProductID', JSON.stringify(this.cartID));
  this.totalQuantity = this.cart.length;
  this._totalQuantityStr();
  if (this.totalQuantity == 0) {
    this.totalQuantityEmpty = true;
  } else {
    this.totalQuantityEmpty = false;
  }
  }

  public cartPrices(price) {
    this.cartPrice.push(price);
  }

  public arraySum() {
    this.cartSum = 0;
    for (var i = 0; i < this.cartPrice.length; i++) {
      this.cartSum += this.cartPrice[i];
    }
//    localStorage.setItem('Shopping-cart-price', JSON.stringify(this.cartPrice));
  }

  public _totalQuantityStr() {
    if (this.totalQuantity == 1) {
      this.totalQuantityStr = 'Товар'
    }
    if (this.totalQuantity > 1) {
      this.totalQuantityStr = 'Товара'
    }
    if (this.totalQuantity > 4) {
      this.totalQuantityStr = 'Товаров'
    }
  }

}
