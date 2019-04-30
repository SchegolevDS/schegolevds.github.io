import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cart = [];
  cartPrice = [];
  cartSum: number;
  totalQuantity: any;

  constructor() {
    this.cart = this.getItem();
  }

  public getItem() {
    let arr: any[];
    JSON.parse(localStorage.getItem('Shopping-cart-Product')) != null ? (
      arr = JSON.parse(localStorage.getItem('Shopping-cart-Product'))
    ): (arr = []);
    return arr;
  }

  private setItem() {
    localStorage.setItem('Shopping-cart-Product', JSON.stringify(this.cart));
  }

  public add(product:any) {
    this.cart.map(product => product.id).includes(product.id) == false ? (
      this.cart.push(product),
      this.setItem(),
      this._totalQuantity()
    ):null;
  }

  public delete (index: number) {
    this.cart.splice(index, 1);
    this.setItem();
    this._totalQuantity();
  }

  public cartPrices(price: number) {
    this.cartPrice.push(price);
  }

  public arraySum() {
    this.cartSum = 0;
    this.cartSum = this.cartPrice.reduce(function(a, b) {
      return a + b;
    });
  }

  private _totalQuantity() {
    this.totalQuantity = this.cart.length;
  }
}
