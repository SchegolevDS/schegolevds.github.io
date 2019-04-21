import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { OrderByPipe} from 'angular-pipes';
import {NgxPaginationModule} from 'ngx-pagination';

import { CatalogRoutingModule } from './catalog-routing.module';
import { SortingComponent } from './sorting/sorting.component';
import { ProductCardMinComponent } from './product-card-min/product-card-min.component';
import { SearchPipe } from '../../pipes/search.pipe';
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [
    SortingComponent,
    ProductCardMinComponent,
    SearchPipe,
    OrderByPipe,
    CatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    Ng5SliderModule,
    NgxPaginationModule
  ]
})
export class CatalogModule { }
