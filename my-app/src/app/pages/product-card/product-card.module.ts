import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardRoutingModule } from './product-card-routing.module';
import { ProductCardComponent } from './product-card.component';
import { ImgCollapseComponent } from './img-collapse/img-collapse.component';

@NgModule({
  declarations: [ProductCardComponent, ImgCollapseComponent, ],
  imports: [
    CommonModule,
    ProductCardRoutingModule,
  ]
})
export class ProductCardModule { }
