import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchResultService {

  matchesResultUrl="https://api.opendota.com/api/players/27824489/matches?win=1"

  constructor(private http:HttpClient) { }

  getMatchResult():Observable<any>{
    return this.http.get<any>(this.matchesResultUrl);
  }
}
