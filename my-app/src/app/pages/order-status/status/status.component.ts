import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  products:Product[];
  totalQuantity:number;
  totalQuantityStr:string;
  date

  constructor(public orderService:OrderService) { }


  ngOnInit() {
    this.products = this.orderService.orderProducts
    this.totalQuantity = this.orderService.totalQuantity
    this.totalQuantityStr = this.orderService.totalQuantityStr
    this.date = this.orderService.date
  }

}
