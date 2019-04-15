import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './pages/catalog/catalog.module#CatalogModule'},
  {path: ':category/product/:id', loadChildren: './pages/product-card/product-card.module#ProductCardModule'},
  {path: 'shopping-cart', loadChildren: './pages/shopping-cart/shopping-cart.module#ShoppingCartModule'},
  {path: 'order-status', loadChildren: './pages/order-status/order-status.module#OrderStatusModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
