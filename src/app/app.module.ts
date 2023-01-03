import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroIdToHeroNamePipe } from './pipes/function/hero-id-to-hero-name.pipe';
import { MatchResultPipe } from './pipes/customdata/match-result.pipe';
import { HeroIdToHeroImgPipe } from './pipes/function/hero-id-to-hero-img.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeCardComponent,
    PlayerInfoComponent,
    PlayerStatsComponent,
    HomeComponent,
    HeroIdToHeroNamePipe,
    MatchResultPipe,
    HeroIdToHeroImgPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    PlayerInfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
