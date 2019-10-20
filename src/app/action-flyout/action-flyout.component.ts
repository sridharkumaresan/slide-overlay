import { ActionService, Action, ACTIONS } from './../action.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { tap, distinctUntilChanged, pluck, takeUntil, switchMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-action-flyout',
  templateUrl: './action-flyout.component.html',
  styleUrls: ['./action-flyout.component.scss']
})
export class ActionFlyoutComponent implements OnInit {
  visible: boolean = false;
  reasons: [];
  action;
  private unsub$ = new Subject<void>();
  loading$ = new Subject<boolean>();
  disableForm$ = new Subject<boolean>();
  items: any[] = [];
  files: File[] = [];
  left;

  constructor(private actionService: ActionService) {
    this.actionService.action$.pipe(
      takeUntil(this.unsub$),
      tap((action: Action) => {
        this.items = action.items;
        this.action = action.action;
      }),
      switchMap((action: Action) => {
        this.loading$.next(true);
        return this.actionService.getReasons(action.action)
      }),
      delay(1800)
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

  receiveForm(form) {
    console.table(form);
    // Call the service to post action
    this.postAction();
  }

  postAction() {
    this.disableForm$.next(true);
    this.actionService.postAction()
    .pipe(
      delay(2000),
      takeUntil(this.unsub$)
    )
    .subscribe(
      data => {
        this.disableForm$.next(false);
        setTimeout(()=>{
          this.items = [];
          this.actionService.refreshGrid(true);
        }, 1000);
      }
    )
  }

  getFile(file: any) {
    const _file: File = file.attachment;
    this.left=false;
    this.files.push(file);
    console.log('Get Files method ', this.files);
  }

  upload() {
    console.log('Uploading... ', this.files);
  }

}
