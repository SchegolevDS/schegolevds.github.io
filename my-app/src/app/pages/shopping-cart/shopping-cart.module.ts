import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartPageComponent } from './shopping-cart-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './shopping-cart/product/product.component';
import { PipeModule } from 'src/app/pipes/pipe.module';

@NgModule({
  declarations: [
    ShoppingCartPageComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    PipeModule,
  ]
})
export class ShoppingCartModule { }
