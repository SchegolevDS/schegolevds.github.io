import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PaginationInstance } from 'ngx-pagination';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';
import { Categories } from 'src/app/models/categories';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [ProductService]
})

export class CatalogComponent implements OnInit {
  products: Product[] = [];
  categories = Categories;
  error: any;
  title: string;

  public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 14,
        currentPage: 1
    };

  constructor(public filter: Filter,
              private router: Router,
              private _productService: ProductService,
              private _cartService:ShoppingCartService) { }

  getProducts(category: any, title: string) {
      this._productService.getProducts(category).subscribe(data => this.products=data);
      this.title = title;
  }

  ngOnInit() {
    const currentCategory = this.categories[this.router.url.replace('/', '')];
    this.getProducts(currentCategory.categoryName, currentCategory.title)
  }
}
