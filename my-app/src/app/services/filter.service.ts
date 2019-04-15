import { Injectable, ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  productPriceMin:number = 0;
  productPriceMax:number = 100000;
  searchStr:string;
  Type: string = 'name';



  constructor() {
  }
}
