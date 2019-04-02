import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/models/product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){
  }

  getProducts() : Observable<Product[]> {
      return this.http.get('assets/product.json').pipe(map(data=>{
          let productList = data["productList"];
          return productList.map(function(product:any) {
              return {id: product.id,
                      name: product.name,
                      price: product.price,
                      imgURL: product.imgURL,
                    };
            });
      }));
  }

}
