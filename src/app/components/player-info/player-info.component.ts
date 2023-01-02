import { Component,  OnInit } from '@angular/core';
import { Dota2ApiService } from '../../services/dota2-api.service';
import { playerInfoData } from '../../model/playerInfoData';
import { DataService } from "../../services/data-service.service";


@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css'],
})
export class PlayerInfoComponent implements OnInit {
  steamId: number  = 0

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

  constructor(private service: Dota2ApiService,
    private dataservice:DataService) {

    }


  ngOnInit(): void {
    this.dataservice.receiveSteamId().subscribe((steamId) =>{
      this.steamId = steamId
      this.getSteamId()
    })
  }




  getSteamId(){
    this.service.getPlayerInfo(this.steamId).subscribe({
      next: (res) => {
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
