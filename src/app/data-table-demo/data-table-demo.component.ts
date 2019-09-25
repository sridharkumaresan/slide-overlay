import  { ACTIONS, ActionMaker, ActionService } from './../action.service';
import { DemoService } from './demo.service';
import { Component, OnInit, Input } from '@angular/core';
import { filter, tap, pluck, map, takeUntil } from 'rxjs/operators';
import { noop as _noop } from 'lodash-es';
import { MatTableDataSource } from '@angular/material';
import { TabDemoService } from '../tab-demo/tab-demo.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.scss']
})
export class DataTableDemoComponent implements OnInit {
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>();
  selection = new SelectionModel<any>(true, [], true);
  reloadGrid: Subscription = new Subscription;
  limit: number = 1000;
  full: boolean = true;
  data$;
  private unsub$ = new Subject<void>();
  actionFlyoutData: ActionMaker;
  ACTIONS = ACTIONS;
  @Input() page;

  constructor(private demoService: DemoService, private actionService: ActionService) {
    this.reloadGrid = this.actionService.reloadGrid$.subscribe(
      shouldReload => {
        if(shouldReload) {
          this.reset();
          this.buildData();
        }
      }
    )
  }

  ngOnInit() {
    this.buildData();
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  buildData = (): void => {
    this.demoService.getData()
    .pipe(
      takeUntil(this.unsub$),
      filter(data => data))
    .subscribe((d: any[]) => {
        const data: any[] = this.dataSource ? [...this.dataSource.data, ...d] : [];
        this.dataSource = new MatTableDataSource(data)});
  }

  reset() {
    this.dataSource = new MatTableDataSource([]);
  }

  hasMore = () => !this.dataSource || this.dataSource.data.length < this.limit;

  handleScroll = (scrolled: boolean) => {
    scrolled ? this.buildData() : _noop();
  }

  doAction(action: ACTIONS) {
    const selected: any[] = this.selection.selected;
    this.selection = new SelectionModel(true, [ ...selected ], true);
    this.actionFlyoutData = ActionMaker.create({action: action, items: selected});
    this.actionService.announceAction(this.actionFlyoutData);
  }

}
