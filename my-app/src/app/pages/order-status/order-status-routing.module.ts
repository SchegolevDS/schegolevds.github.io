import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusAuthComponent } from './status-auth/status-auth.component';
import { StatusComponent } from './status/status.component';
const routes: Routes = [
  {path: "", component: StatusAuthComponent},
  {path: "order_number", component: StatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderStatusRoutingModule { }
