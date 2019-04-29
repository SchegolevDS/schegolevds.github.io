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
    this.cart = this.getItem('Shopping-cart-Product');
  }

  public getItem(key: string) {
    let arr: any[];
    JSON.parse(localStorage.getItem(key)) != null ? (
      arr = JSON.parse(localStorage.getItem(key))
    ): (arr = [])
    return arr;
  }

  private setItem(key: string, arr: any[]) {
    localStorage.setItem(key, JSON.stringify(arr));
  }

  public add(product:any) {
    this.cart.map(product => product.id).includes(product.id) == false ? (
      this.cart.push(product),
      this.setItem('Shopping-cart-Product', this.cart),
      this._totalQuantity()
    ):(null)
  }

  public delete (index: number) {
    this.cart.splice(index, 1);
    this.setItem('Shopping-cart-Product', this.cart);
    this._totalQuantity()
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
