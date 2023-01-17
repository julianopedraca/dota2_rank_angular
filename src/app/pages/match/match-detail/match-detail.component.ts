import { Component, OnInit } from '@angular/core';
import { MatchResultService } from "../../../services/match-result.service";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  matchData: any = []
  matchPlayers: any = []

  constructor(private matchResult:MatchResultService,
){
  }
  ngOnInit(): void {
    this.getMatchResult();
  }

  getMatchResult(){
    this.matchResult.getMatchResult(6862799313).subscribe({
      next: (match) => {
        this.matchData = match
        this.matchPlayers = match.players
        console.log(this.matchData.players)
      }
    })
  }

}
