import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchResultService {

  matchesResultUrl= `https://api.opendota.com/api/matches/`


  constructor(private http:HttpClient) { }

  getMatchResult(match_id: number):Observable<any>{
    return this.http.get<any>(this.matchesResultUrl+match_id);
  }
}
