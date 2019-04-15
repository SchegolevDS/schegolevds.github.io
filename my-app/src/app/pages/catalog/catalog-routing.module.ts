import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  {path: "", redirectTo: "chairs", component: CatalogComponent},
  {path: "chairs", component: CatalogComponent},
  {path: "beds", component: CatalogComponent},
  {path: "cabinets", component: CatalogComponent},
  {path: "kitchen", component: CatalogComponent},
  {path: "home", component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
