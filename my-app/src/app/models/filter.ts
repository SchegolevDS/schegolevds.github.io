import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Filter {
  productPriceMin:number = 0;
  productPriceMax:number = 100000;
  searchStr:string;
  Type: string = 'name';
}
