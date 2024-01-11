import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  public count$ = new BehaviorSubject<number>(1);
  constructor() { }
}
