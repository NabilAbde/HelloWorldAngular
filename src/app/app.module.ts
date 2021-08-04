import { NgModule , LOCALE_ID} from '@angular/core'; // Add LOCALE_ID

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CarItemComponent } from './cars-list/car-item/car-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsListComponent,
    DriversListComponent,
    HomePageComponent,
    FourOhFourComponent,
    CarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }], // In providers array of @NgModule pour avoir la date en francais
  bootstrap: [AppComponent]
})
export class AppModule { }
