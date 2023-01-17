import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private subject = new Subject<number>;
  private heroSubject = new Subject<any>

  constructor() {}

  sendSteamId(steamUserId: number) {
    this.subject.next(steamUserId);
  }

  receiveSteamId(): Observable<number> {
    return this.subject.asObservable();
  }

  sendHeroesConst(heroesConst: any){
    this.heroSubject.next(heroesConst)
  }

  receiveHeroesConst():Observable<any> {
    return this.heroSubject.asObservable()
  }
}
