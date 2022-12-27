import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroesData } from '../model/HeroesData';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl ="https://api.opendota.com/api/heroes"

  constructor(private http:HttpClient) { }

  getHeroes():Observable<HeroesData>{
    return this.http.get<HeroesData>(this.heroesUrl)
  }
}
