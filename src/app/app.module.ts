import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { TypeFilterPipe } from "./pipes/type-filter.pipe";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data/in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { BottleWineComponent } from './menu/bottle-wine/bottle-wine.component';
import { ByTheGlassComponent } from './menu/by-the-glass/by-the-glass.component';
import { HalfMagnumComponent } from './menu/half-magnum/half-magnum.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { WineDealsComponent } from './menu/wine-deals/wine-deals.component';
import { WineTypeComponent } from './menu/wine-type/wine-type.component';
import { WineDetailsComponent } from './components/wine-details/wine-details.component';

import { MenuService } from './services/menu.service';
import { WinesService } from "./services/wines.service";

import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';
import { SortByVintagePipe } from './pipes/sort-by-vintage.pipe';
import { SortByRatingPipe } from './pipes/sort-by-rating.pipe';
import { WineDetailsByregionComponent } from './components/wine-details-byregion/wine-details-byregion.component';
import { RegionFilterPipe } from './pipes/region-filter.pipe';
import { VarietalFilterPipe } from './pipes/varietal-filter.pipe';
import { WineDetailsBybottleComponent } from './components/wine-details-bybottle/wine-details-bybottle.component';
import { WineDetailsDealsComponent } from './components/wine-details-deals/wine-details-deals.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    BottleWineComponent,
    ByTheGlassComponent,
    HalfMagnumComponent,
    MainMenuComponent,
    WineDealsComponent,
    WineTypeComponent,
    WineDetailsComponent,
    TypeFilterPipe,
    SortByNamePipe,
    SortByPricePipe,
    SortByVintagePipe,
    SortByRatingPipe,
    WineDetailsByregionComponent,
    RegionFilterPipe,
    VarietalFilterPipe,
    WineDetailsBybottleComponent,
    WineDetailsDealsComponent,
    LoginComponent
  ],
  providers: [
    MenuService,
    WinesService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
