import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstHeroes } from "../model/const-hero";

@Injectable({
  providedIn: 'root'
})
export class ConstHeroesService {

  private constHeroService: string = 'https://api.opendota.com/api/constants/heroes'

  constructor(private http:HttpClient) { }

  getConstHero():Observable<ConstHeroes>{
    return this.http.get<ConstHeroes>(this.constHeroService)
  }


}
