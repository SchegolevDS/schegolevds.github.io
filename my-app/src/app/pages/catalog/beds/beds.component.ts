import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PaginationInstance } from 'ngx-pagination';
import { AppService } from 'src/app/app.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.scss'],
  providers: [ProductService]
})
export class BedsComponent implements OnInit {
  productsBeds: Product[] = [];
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
    this._productService.getProductsBeds().subscribe(data => this.productsBeds=data);
  }

}
