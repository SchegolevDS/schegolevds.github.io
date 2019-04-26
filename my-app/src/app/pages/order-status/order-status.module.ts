import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OrderStatusRoutingModule } from './order-status-routing.module';
import { StatusAuthComponent } from './status-auth/status-auth.component';
import { StatusComponent } from './status/status.component';
import { ProductComponent } from './status/product/product.component';

@NgModule({
  declarations: [StatusAuthComponent, StatusComponent, ProductComponent],
  imports: [
    CommonModule,
    OrderStatusRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrderStatusModule { }
