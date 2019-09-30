import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ActionMaker } from './action.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterSource = new Subject<boolean>();
  public openFilter$: Observable<boolean> = this.filterSource.asObservable();

  constructor() { }

  announceFilter(shouldOpen) {
    this.filterSource.next(shouldOpen);
  }
}
