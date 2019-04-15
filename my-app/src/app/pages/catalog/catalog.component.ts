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
  title: string;

  public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 14,
        currentPage: 1
    };

  constructor(public router: Router,
              public filterService: FilterService,
              private _productService: ProductService,
              private _cartService:ShoppingCartService) { }

  getProducts(url, category, title) {
    if (this.router.url === url) {
      this._productService.getProducts(category).subscribe(data => this.products=data);
      this.title = title;
    }
  }

  theGetProducts() {
    this.getProducts('/chairs', "productList__Chairs", "Стулья и кресла");
    this.getProducts('/beds', "productList__Beds", "Кровати и матрасы");
    this.getProducts('/cabinets', "productList__Cabinets", "Шкафы и комоды");
    this.getProducts('/kitchen', "productList__Kitchen", "Мебель для кухни");
    this.getProducts('/home', "productList__Home", "Товары для дома");
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('Shopping-cart-ProductID')) != null) {
      this._cartService.cartID = JSON.parse(localStorage.getItem('Shopping-cart-ProductID'));
    }
    this.theGetProducts();
  }
}
