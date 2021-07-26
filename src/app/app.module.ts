import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamCardComponent } from './teams/team-card/team-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DataService } from './data.service';
import { DriversComponent } from './drivers/drivers.component';
import { DriverCardComponent } from './drivers/driver-card/driver-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamsComponent,
    TeamCardComponent,
    DashboardComponent,
    DriversComponent,
    DriverCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
