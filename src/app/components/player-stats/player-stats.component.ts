import { MatchResultService } from './../../services/match-result.service';
import { HeroesData } from './../../model/HeroesData';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { MatchesData } from '../../model/matchesData';
import { MatchesService } from '../../services/matches.service';
@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css'],
})
export class PlayerStatsComponent implements OnInit {
  MatchesData: MatchesData = [];
  heroesName: HeroesData = [];
  matchResultStr = '';


  constructor(
    private matchService: MatchesService,
    private heroesService: HeroesService,
    private matchResultService: MatchResultService,
  ) {
  }


  ngOnInit(): void {
    this.matchService.getMatches().subscribe({
      next: (res) => {
        for (let index = 0; index < 10; index++) {
          this.MatchesData.push(res[index]);
        }
      },
    });

    this.heroesService.getHeroes().subscribe({
      next: (heroes) => {
        this.heroesName = heroes;
      },
    });

  }

  heroIdToHeroName(id: number): string {
    console.log('heroIdtoHeoname execution')
    for (const hero of this.heroesName) {
      if (hero.id === id) {
        return hero.localized_name;
      }
    }
    return 'hero not located';
  }

  // matchResult(matchId: number = 6843180250): void {
  //   let win: boolean = false;
  //   this.matchResultService.getMatchResult().subscribe({
  //     next: (results) => {
  //       for (const result of results) {
  //         if (result.match_id === matchId) {
  //           this.matchResultStr = 'win';
  //           win = true
  //         }
  //       }
  //       if (win === false){
  //         this.matchResultStr = 'lose'
  //       }
  //     },
  //   });
  // }
}
