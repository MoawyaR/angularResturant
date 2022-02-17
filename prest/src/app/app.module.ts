import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

import { MenuComponent } from './menu/menu.component';
import { RateComponent } from './rate/rate.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AddrestComponent } from './addrest/addrest.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurantsComponent,
    MenuComponent,
    RateComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    AddrestComponent,
    AddmenuComponent
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
