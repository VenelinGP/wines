import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BottleWineComponent } from './menu/bottle-wine/bottle-wine.component';
import { ByTheGlassComponent } from "./menu/by-the-glass/by-the-glass.component";
import { HalfMagnumComponent } from './menu/half-magnum/half-magnum.component'
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { WineDealsComponent } from "./menu/wine-deals/wine-deals.component";
import { WineTypeComponent } from "./menu/wine-type/wine-type.component";
import { WineDetailsComponent } from "./wine-details/wine-details.component";

//import { WineDetailsComponent } from "./wine-details/wine-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/mainmenu', pathMatch: 'full' },
  { path: 'mainmenu', component: MainMenuComponent },
  { path: 'winedeals', component: WineDealsComponent },
  { path: 'bottlewine', component: BottleWineComponent },
  { path: 'bottlewine/:id', component: WineTypeComponent },
  { path: 'halfmagnum/:id', component: HalfMagnumComponent },
  { path: 'bytheglass', component: ByTheGlassComponent },
  { path: 'winedetails/:id', component: WineDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
