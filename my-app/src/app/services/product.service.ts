import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/models/product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){
  }

  getProductsChairs() : Observable<Product[]> {
      return this.http.get('assets/json/products.json').pipe(map(data=>{
          let productList = data["productList__Chairs"];
          return productList.map(function(product:any) {
              return {id: product.id,
                      name: product.name,
                      price: product.price,
                      imgURL: product.imgURL,
                      imgURL2: product.imgURL2,
                      imgURL3: product.imgURL3,
                      imgURL4: product.imgURL4,
                      imgURL5: product.imgURL5,
                      imgURL6: product.imgURL6,
                      description: product.description,
                      additionalDescriptionHeadline: product.additionalDescriptionHeadline,
                      additionalDescription: product.additionalDescription
                    };
            });
      }));
  }

  getProductsBeds() : Observable<Product[]> {
      return this.http.get('assets/json/products.json').pipe(map(data=>{
          let productList = data["productList__Beds"];
          return productList.map(function(product:any) {
              return {id: product.id,
                      name: product.name,
                      price: product.price,
                      imgURL: product.imgURL,
                      imgURL2: product.imgURL2,
                      imgURL3: product.imgURL3,
                      imgURL4: product.imgURL4,
                      imgURL5: product.imgURL5,
                      imgURL6: product.imgURL6,
                      description: product.description,
                      additionalDescriptionHeadline: product.additionalDescriptionHeadline,
                      additionalDescription: product.additionalDescription
                    };
            });
      }));
  }

  getProductsCabinets() : Observable<Product[]> {
      return this.http.get('assets/json/products.json').pipe(map(data=>{
          let productList = data["productList__Cabinets"];
          return productList.map(function(product:any) {
              return {id: product.id,
                      name: product.name,
                      price: product.price,
                      imgURL: product.imgURL,
                      imgURL2: product.imgURL2,
                      imgURL3: product.imgURL3,
                      imgURL4: product.imgURL4,
                      imgURL5: product.imgURL5,
                      imgURL6: product.imgURL6,
                      description: product.description,
                      additionalDescriptionHeadline: product.additionalDescriptionHeadline,
                      additionalDescription: product.additionalDescription
                    };
            });
      }));
  }

  getProductsKitchen() : Observable<Product[]> {
      return this.http.get('assets/json/products.json').pipe(map(data=>{
          let productList = data["productList__Kitchen"];
          return productList.map(function(product:any) {
              return {id: product.id,
                      name: product.name,
                      price: product.price,
                      imgURL: product.imgURL,
                      imgURL2: product.imgURL2,
                      imgURL3: product.imgURL3,
                      imgURL4: product.imgURL4,
                      imgURL5: product.imgURL5,
                      imgURL6: product.imgURL6,
                      description: product.description,
                      additionalDescriptionHeadline: product.additionalDescriptionHeadline,
                      additionalDescription: product.additionalDescription
                    };
            });
      }));
  }

  getProductsHome() : Observable<Product[]> {
      return this.http.get('assets/json/products.json').pipe(map(data=>{
          let productList = data["productList__Home"];
          return productList.map(function(product:any) {
              return {id: product.id,
                      name: product.name,
                      price: product.price,
                      imgURL: product.imgURL,
                      imgURL2: product.imgURL2,
                      imgURL3: product.imgURL3,
                      imgURL4: product.imgURL4,
                      imgURL5: product.imgURL5,
                      imgURL6: product.imgURL6,
                      description: product.description,
                      additionalDescriptionHeadline: product.additionalDescriptionHeadline,
                      additionalDescription: product.additionalDescription
                    };
            });
      }));
  }

}
