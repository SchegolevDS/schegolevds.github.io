import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { SearchComponent } from './main/header/search/search.component';
import { LogoComponent } from './main/logo/logo.component';
import { NavComponent } from './main/nav/nav.component';
import { ShoppingcartIndicatorComponent } from './main/header/shoppingcart-indicator/shoppingcart-indicator.component';
import { OrderstatusLinkComponent } from './main/orderstatus-link/orderstatus-link.component';
import { ContentComponent } from './main/content/content.component';
import { FooterComponent } from './main/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LogoComponent,
    NavComponent,
    ShoppingcartIndicatorComponent,
    OrderstatusLinkComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
