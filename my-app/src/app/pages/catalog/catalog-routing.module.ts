import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BedsComponent } from './beds/beds.component';
import { ChairsComponent } from './chairs/chairs.component';
import { CabinetsComponent } from './cabinets/cabinets.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: ChairsComponent},
  {path: "beds", component: BedsComponent},
  {path: "cabinets", component: CabinetsComponent},
  {path: "kitchen", component: KitchenComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
