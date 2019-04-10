import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PaginationInstance } from 'ngx-pagination';
import { AppService } from 'src/app/app.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';

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
    private _filterService: AppService,
    private _productService: ProductService,
    private _cartService:ShoppingCartService) {
    }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
      this._cartService.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
    }
    if (this.router.url === '/') {
      this._productService.getProductsChairs().subscribe(data => this.products=data);
    }
    if (this.router.url === '/beds') {
      this._productService.getProductsBeds().subscribe(data => this.products=data);
    }
    if (this.router.url === '/cabinets') {
      this._productService.getProductsCabinets().subscribe(data => this.products=data);
    }
    if (this.router.url === '/kitchen') {
      this._productService.getProductsKitchen().subscribe(data => this.products=data);
    }
    if (this.router.url === '/home') {
      this._productService.getProductsHome().subscribe(data => this.products=data);
    }
  }
}
