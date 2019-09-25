import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private actionSource = new Subject<ActionMaker>();
  public action$: Observable<ActionMaker> = this.actionSource.asObservable();

  private reloadGridSource = new Subject<boolean>();
  public reloadGrid$: Observable<boolean> = this.reloadGridSource.asObservable();

  constructor(private http: HttpClient) { }

  announceAction(action: ActionMaker) {
    console.table(action);
    this.actionSource.next(action);
  }

  refreshGrid(shouldReload: boolean) {
    this.reloadGridSource.next(true);
  }

  getReasons(code: string) {
    return this.http.get('http://localhost:3000/reasons');
  }

  postAction() {
    return of([]);
  }
}


export enum ACTIONS {
   NO_BREACH = 'No Breach',
   BREACH = 'Breach',
   RE_OPEN = 'Re Open'
}

export class Action {
  constructor(public action: ACTIONS, public items: any[]) {}
}

export class ActionMaker {
  static create(e: Action) {
    return new Action(e.action, e.items)
  }
}
