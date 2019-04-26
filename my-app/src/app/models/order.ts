import { Injectable} from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class Order {
  order: any;
  orderProducts:Product[];
  totalQuantity:number;
  totalQuantityStr:string;
  date: any
}
