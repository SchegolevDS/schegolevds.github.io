import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardRoutingModule } from './product-card-routing.module';
import { ProductCardComponent } from './product-card.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [ProductCardComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    ProductCardRoutingModule,
  ]
})
export class ProductCardModule { }
