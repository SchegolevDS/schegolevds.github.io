import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { PaginationInstance } from 'ngx-pagination';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
  providers: [ProductService]
})
export class KitchenComponent implements OnInit {
  productsKitchen: Product[] = [];
  error: any;
  public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 16,
        currentPage: 1
    };

  constructor(private _filterService: AppService,
    private _productService: ProductService,
    private _cartService:ShoppingCartService) {

    }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
      this._cartService.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
    }
    this._productService.getProductsKitchen().subscribe(data => this.productsKitchen=data);
  }

}
