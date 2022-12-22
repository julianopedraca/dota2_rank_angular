import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeCardComponent,
    PlayerInfoComponent,
    PlayerStatsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
