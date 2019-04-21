import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardRoutingModule } from './product-card-routing.module';
import { ProductCardComponent } from './product-card.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ImgCollapseComponent } from './img-collapse/img-collapse.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductCardComponent,
    BreadcrumbsComponent,
    ImgCollapseComponent],
  imports: [
    CommonModule,
    ProductCardRoutingModule,
    FormsModule
  ]
})
export class ProductCardModule { }
