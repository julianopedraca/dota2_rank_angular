import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {playerInfoData} from '../model/playerInfoData'

@Injectable({
  providedIn: 'root'
})
export class Dota2ApiService {
  private playerInfoUrl:string = 'https://api.opendota.com/api/players/27824489'

  constructor(private http: HttpClient) { }

  getPlayerInfo():Observable<playerInfoData>{
    return this.http.get<playerInfoData>(this.playerInfoUrl)
  }
}
