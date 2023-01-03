import { Component, OnInit } from '@angular/core';

import { MatchesData } from '../../model/matchesData';
import { ConstHeroesService } from '../../services/const-heroes-service.service';
import { MatchesService } from '../../services/matches.service';
import { HeroesData } from './../../model/HeroesData';
import { DataService } from './../../services/data-service.service';
import { MatchResultService } from './../../services/match-result.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
})
export class PlayerStatsComponent implements OnInit {
  matchesData: MatchesData = [];
  heroesName: HeroesData = [];
  heroImage: string = '';

  steamId: number = 0;

  constructor(
    private matchService: MatchesService,
    private matchResultService: MatchResultService,
    private dataService: DataService,
    private constHeroesService: ConstHeroesService
  ) {}

  ngOnInit(): void {
    this.dataService.receiveSteamId().subscribe((steamId) => {
      this.steamId = steamId;
      this.getMatches();
      this.matchesData = [];
    });

    this.constHeroesService.getConstHero().subscribe({
      next: (heroes) => {
        this.heroesName = Object.values(heroes);
      },
    });
  }

  getMatches() {
    this.matchService.getMatches(this.steamId).subscribe({
      next: (res) => {
        for (let index = 0; index < 10; index++) {
          this.matchesData.push(res[index]);
          this.matchResult(index);
        }
      },
    });
  }

  matchResult(index: number): void {
    this.matchResultService
      .getMatchResult(this.matchesData[index].match_id)
      .subscribe({
        next: (matchRes) => {
          for (const res of matchRes.players) {
            if (res.account_id === +this.steamId) {
              this.matchesData[index].win = res.win;
            }
          }
        },
      });
  }
}
