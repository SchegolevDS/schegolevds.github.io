import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [ProductService]
})
export class ProductCardComponent implements OnInit {
  id:number;
  product: Product;
  category:string;

  constructor(private route: ActivatedRoute,
  public _cartService:ShoppingCartService,
  private _productService: ProductService) { }

  getProduct(category) {
    this._productService.getProductById(this.id, category).subscribe(product => this.product = product)
  }

  searchProduct() {
    if (this.product == undefined) {
        this.getProduct("productList__Chairs");
    }
    if (this.product == undefined) {
      this.getProduct("productList__Beds");
    }
    if (this.product == undefined) {
      this.getProduct("productList__Cabinets");
    }
    if (this.product == undefined) {
      this.getProduct("productList__Kitchen");
    }
    if (this.product == undefined) {
      this.getProduct("productList__Home");
    }
  }

  public addCart(product) {
      this._cartService.add(product);
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.searchProduct();
  }

}
