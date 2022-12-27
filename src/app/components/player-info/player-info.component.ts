import { Component, OnInit } from '@angular/core';
import { Dota2ApiService } from '../../services/dota2-api.service';
import { playerInfoData } from '../../model/playerInfoData';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css'],
})
export class PlayerInfoComponent implements OnInit {
  playerData: playerInfoData = {
    mmr_estimate: {
      estimate: 0,
    },
    profile: {
      account_id: 0,
      avatarfull: '',
      personaname: '',
    },
  };
  constructor(private service: Dota2ApiService) {}

  ngOnInit(): void {
    this.service.getPlayerInfo().subscribe({
      next: (res) => {
        console.log(res);
        this.playerData = {
          mmr_estimate: {
            estimate: res.mmr_estimate.estimate,
          },
          profile: {
            account_id: res.profile.account_id,
            avatarfull: res.profile.avatarfull,
            personaname: res.profile.personaname,
          },
        };
      },
    });
  }
}
