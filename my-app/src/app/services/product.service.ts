import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/models/product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){
  }

  getProducts(productCategory: string) : Observable<Product[]> {
      return this.http.get('assets/json/products.json').pipe(map(data=>{
          let productList = data[productCategory];
          return productList;
      }));
  }

  getProductById(id: number) {
    return this.http.get('assets/json/products.json').pipe(map(data=>{
        let productList = data["productList__Chairs"].
                          concat(data["productList__Beds"]).
                          concat(data["productList__Cabinets"]).
                          concat(data["productList__Kitchen"]).
                          concat(data["productList__Home"]);
        return productList.filter((product: { id: number; }) => product.id === id)[0] || null
      }));
    }
}
