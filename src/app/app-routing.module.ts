import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { GeneralComponent } from './components/general/general.component';
import { HealthComponent } from './components/health/health.component';
import { HomeComponent } from './components/home/home.component';
import { ScienceComponent } from './components/science/science.component';
import { SportComponent } from './components/sport/sport.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'general', component:GeneralComponent},
  { path:'science', component:ScienceComponent},
  { path:'technology', component:TechnologyComponent},
   { path:'entertainment', component:EntertainmentComponent},
   { path:'health', component:HealthComponent},
  { path:'sport', component:SportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
