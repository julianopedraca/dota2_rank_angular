import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerInfoComponent } from './pages/home/components/player-info/player-info.component';
import { PlayerStatsComponent } from './pages/home/components/player-stats/player-stats.component';
import { WelcomeCardComponent } from './pages/home/components/welcome-card/welcome-card.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroIdToHeroNamePipe } from './pipes/function/hero-id-to-hero-name.pipe';
import { MatchResultPipe } from './pipes/customdata/match-result.pipe';
import { HeroIdToHeroImgPipe } from './pipes/function/hero-id-to-hero-img.pipe';
import { MatchDetailComponent } from "./pages/match/match-detail/match-detail.component";

import { HeroesConst } from "../common/heroes.const";


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
    MatchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroesConst, {
    provide: APP_INITIALIZER,
    multi: true,
    useValue: () => {
      console.log('app initialization...')
    }
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
