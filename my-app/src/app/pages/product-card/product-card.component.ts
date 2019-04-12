import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductService } from 'src/app/services/product.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [ProductService]
})
export class ProductCardComponent implements OnInit {
  id:number;
  product: Product;

  constructor(private route: ActivatedRoute,
  private _cartService:ShoppingCartService,
  private _filterService: AppService,
  private _productService: ProductService,) { }

  getProduct(category) {
    this._productService.getProductById(this.id, category).subscribe(d => this.product = d)
  }

  searchProduct() {
    this.getProduct("productList__Chairs")
    if (this.product == null) {
      this.getProduct("productList__Beds");
    }
    if (this.product == null) {
      this.getProduct("productList__Cabinets");
    }
    if (this.product == null) {
      this.getProduct("productList__Kitchen");
    }
    if (this.product == null) {
      this.getProduct("productList__Home");
    }
  }

  public addCart(product: any) {
    this._cartService.add(product);
  }

  ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.searchProduct();
  }

}
