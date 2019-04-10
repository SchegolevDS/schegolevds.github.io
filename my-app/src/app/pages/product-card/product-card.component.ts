import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  public id: number;

  public routeSubscription: Subscription;
  public querySubscription: Subscription;
  public selectImg: string;
  product: any;




  constructor(private route: ActivatedRoute,
  private _cartService:ShoppingCartService) {

    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam;
        this.selectImg = this.product.imgURL;
      }
    );
  }



  public select() {
    this.selectImg = this.product.imgURL;
  }
  public select2() {
    this.selectImg = this.product.imgURL2;
  }
  public select3() {
    this.selectImg = this.product.imgURL3;
  }
  public select4() {
    this.selectImg = this.product.imgURL4;
  }

  public addCart(product: any) {
    this._cartService.add(product);
  }

  ngOnInit() { }
}
