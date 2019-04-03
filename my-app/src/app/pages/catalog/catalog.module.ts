import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { OrderByPipe} from 'angular-pipes';
import {NgxPaginationModule} from 'ngx-pagination';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { SortingComponent } from './sorting/sorting.component';
import { ProductCardMinComponent } from './product-card-min/product-card-min.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [CatalogComponent,
    SortingComponent,
    ProductCardMinComponent,
    SearchPipe,
    OrderByPipe],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    Ng5SliderModule,
    NgxPaginationModule
  ]
})
export class CatalogModule { }
