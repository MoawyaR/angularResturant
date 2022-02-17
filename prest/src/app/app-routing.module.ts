import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AddrestComponent } from './addrest/addrest.component';
import { AddmenuComponent } from './addmenu/addmenu.component';

const routes: Routes = [
 
  {path:"home",component:HomeComponent},
  {path:"restr",component:RestaurantsComponent},
  {path:"menur",component:MenuComponent}, 
  {path:"arest",component:AddrestComponent},
  {path:"amenu",component:AddmenuComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
