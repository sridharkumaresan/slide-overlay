import { ActionService, Action, ACTIONS } from './../action.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap, distinctUntilChanged, pluck, takeUntil, switchMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-action-flyout',
  templateUrl: './action-flyout.component.html',
  styleUrls: ['./action-flyout.component.scss']
})
export class ActionFlyoutComponent implements OnInit {
  visible: boolean = false;
  reasons: [];
  private unsub$ = new Subject<void>();
  loading$ = new Subject<boolean>();
  items: any[] = [];

  constructor(private actionService: ActionService) {
    this.actionService.action$.pipe(
      takeUntil(this.unsub$),
      tap((action: Action) => this.items = action.items),
      switchMap((action: Action) => {
        this.loading$.next(true);
        return this.actionService.getReasons(action.action)
      }),
      delay(3000)
      )
      .subscribe(
        (reasons: any) => {
          this.reasons = reasons;
          this.loading$.next(false);
        }
      );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
