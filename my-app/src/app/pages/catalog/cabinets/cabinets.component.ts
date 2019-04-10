import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PaginationInstance } from 'ngx-pagination';
import { AppService } from 'src/app/app.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cabinets',
  templateUrl: './cabinets.component.html',
  styleUrls: ['./cabinets.component.scss'],
  providers: [ProductService]
})
export class CabinetsComponent implements OnInit {
  productsCabinets: Product[] = [];
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
    this._productService.getProductsCabinets().subscribe(data => this.productsCabinets=data);
  }

}
