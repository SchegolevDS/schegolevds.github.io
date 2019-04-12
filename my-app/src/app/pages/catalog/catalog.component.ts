import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PaginationInstance } from 'ngx-pagination';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [ProductService]
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  error: any;
  public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 16,
        currentPage: 1
    };

  constructor(
    public router: Router,
    private _filterService: FilterService,
    private _productService: ProductService,
    private _cartService:ShoppingCartService) {
    }

  getProducts(url, category) {
    if (this.router.url === url) {
      this._productService.getProducts(category).subscribe(data => this.products=data);
    }
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
      this._cartService.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
    }
    this.getProducts('/', "productList__Chairs");
    this.getProducts('/beds', "productList__Beds");
    this.getProducts('/cabinets', "productList__Cabinets");
    this.getProducts('/kitchen', "productList__Kitchen");
    this.getProducts('/home', "productList__Home");
  }
}
