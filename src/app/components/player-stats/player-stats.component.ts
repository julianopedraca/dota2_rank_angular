import { DataService } from './../../services/data-service.service';
import { MatchResultService } from './../../services/match-result.service';
import { HeroesData } from './../../model/HeroesData';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatchesData } from '../../model/matchesData';
import { MatchesService } from '../../services/matches.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
})
export class PlayerStatsComponent implements OnInit, OnChanges {
  matchesData: MatchesData = [];
  heroesName: HeroesData = [];
  steamId: number = 0

  constructor(
    private matchService: MatchesService,
    private heroesService: HeroesService,
    private matchResultService: MatchResultService,
    private dataService:DataService
  ) {}

  ngOnChanges(): void {
    console.log('chanjou');
  }

  ngOnInit(): void {
    this.dataService.receiveSteamId().subscribe((steamId) => {
      this.steamId = steamId
      this.getMatches()
      this.matchesData = []
    })



    this.heroesService.getHeroes().subscribe({
      next: (heroes) => {
        this.heroesName = heroes;
      },
    });


  }

  getMatches(){
    this.matchService.getMatches(this.steamId).subscribe({
      next: (res) => {
        for (let index = 0; index < 10; index++) {
          this.matchesData.push(res[index]);
          this.matchResult(index)
        }
      },
    });
  }

  matchResult(index:number): void {
    this.matchResultService.getMatchResult(this.matchesData[index].match_id).subscribe({
      next: (matchRes) => {
        for (const res of matchRes.players) {
          if (res.account_id === +this.steamId){
            this.matchesData[index].win = res.win
          }
        }
      },
    });
  }
}
