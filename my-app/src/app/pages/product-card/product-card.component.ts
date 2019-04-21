import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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

  getProduct() {
    this._productService.getProductById(this.id).subscribe(product => this.product = product)
  }


  public addCart(product: any) {
      this._cartService.add(product);
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

}
