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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriversItemComponent } from './drivers-list/drivers-item/drivers-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataService } from './services/data.service';
import { FooterComponent } from './footer/footer.component';
import { NewCarComponent } from './cars-list/new-car/new-car.component';
import { NewDriverComponent } from './drivers-list/new-driver/new-driver.component';
import { DataFromApiComponent } from './data-from-api/data-from-api.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsListComponent,
    DriversListComponent,
    HomePageComponent,
    FourOhFourComponent,
    CarItemComponent,
    DriversItemComponent,
    FooterComponent,
    NewCarComponent,
    NewDriverComponent,
    DataFromApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }, DataService], // In providers array of @NgModule pour avoir la date en francais
  bootstrap: [AppComponent]
})
export class AppModule { }
