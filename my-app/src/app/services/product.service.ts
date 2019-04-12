import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Product } from 'src/app/models/product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){
  }

  getProducts(productCategory) : Observable<Product[]> {
      return this.http.get('assets/json/products.json').pipe(map(data=>{
          let productList = data[productCategory];
          return productList.map(function(product:any) {
              return {id: product.id,
                      name: product.name,
                      price: product.price,
                      imgUrls: product.imgUrls,
                      description: product.description,
                      additionalDescriptionHeadline: product.additionalDescriptionHeadline,
                      additionalDescription: product.additionalDescription
                    };
            });
      }));
  }

  getProductById(id: number, category:string) {
    return this.http.get('assets/json/products.json').pipe(map(data=>{
        let productList = data[category];
        return productList.filter(d => d.id === id)[0] || null
      }));
    }
    
}
