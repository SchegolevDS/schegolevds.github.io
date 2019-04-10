import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input () product:any;
  @Input () id:number;
  quantity:number;
  btnDisabled:Boolean;
  sum: number;
  constructor(private _cartService:ShoppingCartService) {
  }

  productQuantity() {
  }

  productQuantityDown() {
    if (this.quantity == 1){
      this.btnDisabled = true;
    }
    this._cartService.cartPrices(-this.product.price*this.quantity);
    this.quantity = this.quantity - 1;
    this._cartService.cartPrices(this.product.price*this.quantity);
    this.sum = this.product.price*this.quantity;
    this._cartService.arraySum()
    localStorage.setItem('quantityProduct-' + this.id, JSON.stringify(this.quantity))
  }

  productQuantityUp() {
    if (this.quantity !== 1){
      this.btnDisabled = false;
    }
    this._cartService.cartPrices(-this.product.price*this.quantity);
    this.quantity = this.quantity + 1;
    this._cartService.cartPrices(this.product.price*this.quantity);
    this.sum = this.product.price*this.quantity;
    this._cartService.arraySum()
    localStorage.setItem('quantityProduct-' + this.id, JSON.stringify(this.quantity))
  }

  deleteProduct() {
    this._cartService.cartPrices(-this.product.price*this.quantity);
    this._cartService.arraySum()
    this._cartService.delete(this.id);
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('quantityProduct-' + this.id)) != null) {
      this.quantity = JSON.parse(localStorage.getItem('quantityProduct-' + this.id));
    } else {
      this.quantity = 1;
    }
    this.sum = this.product.price*this.quantity;
    this._cartService.cartPrices(this.product.price*this.quantity);
    this._cartService.arraySum()
  }

}
