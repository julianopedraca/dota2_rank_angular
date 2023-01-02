import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatchesData} from '../model/matchesData'

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  private matchesUrl = 'https://api.opendota.com/api/players/';

  constructor(private http: HttpClient) {}


  getMatches(steamId:number | null):Observable<MatchesData> {
    return this.http.get<MatchesData>(`${this.matchesUrl}${steamId}/recentMatches`);
  }
}
