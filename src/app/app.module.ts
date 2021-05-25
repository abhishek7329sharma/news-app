import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from "./services/newsapi.service";
import { SportComponent } from './components/sport/sport.component';
import { GeneralComponent } from './components/general/general.component';
import { ScienceComponent } from './components/science/science.component';
import { HealthComponent } from './components/health/health.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { TechnologyComponent } from './components/technology/technology.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SportComponent,
    GeneralComponent,
    ScienceComponent,
    HealthComponent,
    EntertainmentComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NewsapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
