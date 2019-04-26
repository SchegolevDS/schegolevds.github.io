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
    this.cartID = this.getItem('Shopping-cart-ProductID');
    this.cart = this.getItem('Shopping-cart-Product');
  }

  public getItem(key: string) {
    if (JSON.parse(localStorage.getItem(key)) != null) {
      let arr: any[];
      arr = JSON.parse(localStorage.getItem(key));
      return arr;
    } else {
      return [];
    }
  }

  private setItem(key: string, arr: any[]) {
    localStorage.setItem(key, JSON.stringify(arr));
  }

  public add(product:any) {
    function cartID(value: any) {
      return value == product.id;
    }
    if (this.cartID.filter(cartID) != product.id) {
      this.cart.push(product);
      this.cartID.push(product.id);
      this.setItem('Shopping-cart-Product', this.cart);
      this.setItem('Shopping-cart-ProductID', this.cartID);
    }
    this._totalQuantity();
    console.log(this.cartID)
    console.log(this.cart)
  }

  public delete (index: number) {
  this.cart.splice(index, 1);
  this.cartID.splice(index, 1);
  this.setItem('Shopping-cart-Product', this.cart);
  this.setItem('Shopping-cart-ProductID', this.cartID);
  this._totalQuantity()
  }

  public cartPrices(price: number) {
    this.cartPrice.push(price);
  }

  public arraySum() {
    this.cartSum = 0;
    for (var i = 0; i < this.cartPrice.length; i++) {
      this.cartSum += this.cartPrice[i];
    }
  }

  private _totalQuantity() {
    this.totalQuantity = this.cart.length;
    this.TotalQuantityStr()
    if (this.totalQuantity == 0) {
      this.totalQuantityEmpty = true;
    } else {
      this.totalQuantityEmpty = false;
    }
  }

  public TotalQuantityStr() {
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
