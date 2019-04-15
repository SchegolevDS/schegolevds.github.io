import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order:Order;
  orderProducts:Product[];
  totalQuantity:number;
  totalQuantityStr:string;
  date: any

  constructor() { }
}
