import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/models/product';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-product-card-min',
  templateUrl: './product-card-min.component.html',
  styleUrls: ['./product-card-min.component.scss']
})

export class ProductCardMinComponent implements OnInit {
  @Input () product:Product;
  inCart: boolean = true;

  constructor(private _cartService:ShoppingCartService,
              public filter: FilterService) { }

  public addCart(product: any) {
    this._cartService.add(product);
  }

  ngOnInit() {
  }

}
