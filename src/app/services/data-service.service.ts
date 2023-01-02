import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private subject = new Subject<number> ;

  constructor() {}

  sendSteamId(steamUserId: number) {
    this.subject.next(steamUserId);

  }

  receiveSteamId(): Observable<number> {
    return this.subject.asObservable();
  }
}
