import { Component } from '@angular/core';
import { DataService } from "../../../../services/data-service.service";


@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent {
  accountId!: number

  constructor (private dataService : DataService) {
  }

  sendSteamId(steamId:number){
    this.dataService.sendSteamId(steamId)
  }

}
