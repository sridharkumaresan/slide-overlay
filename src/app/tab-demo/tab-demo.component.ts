import { MatTabChangeEvent } from '@angular/material/tabs';
import { FilterService } from './../filter.service';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DemoService } from '../data-table-demo/demo.service';
import { DemoDataSource } from '../data-table-demo/demo-data.source';
import { isEqual } from 'lodash-es';

export interface Tab {
  key: string;
  value: string;
  count: number;
}
@Component({
  selector: 'app-tab-demo',
  templateUrl: './tab-demo.component.html',
  styleUrls: ['./tab-demo.component.scss']
})
export class TabDemoComponent implements OnInit, OnDestroy {
  private unsub$ = new Subject<void>();
  tabs: Tab[] = [];
  selectedIndex = 0;
  demoDataSource: DemoDataSource;
  // TODO:: Change this dirty logic
  firstLoad: boolean;
  constructor(private demoService: DemoService, public filterService: FilterService) {
    this.firstLoad = true;
  }

  ngOnInit() {
    this.demoDataSource = new DemoDataSource(this.demoService);
    this.loadMoreData();

    this.demoDataSource.tabsSubject
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.unsub$),
      )
      .subscribe(
        (tabs: Tab[]) => {
          if (!isEqual(tabs, this.tabs)) {
            this.tabs = tabs;
          }
        }
      )
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  tabChanged(t: MatTabChangeEvent) {
    console.log('Tab change ', t);
    if (t.index !== 0) this.firstLoad = false;
    const shouldReset = !(t.index === 0 && this.firstLoad);
    // skip First tab change event on initial load
    if (shouldReset) {
      this.demoDataSource.reset();
      this.loadMoreData();
    }
  }

  loadMoreData() {
    this.demoDataSource.loadData('asc');
  }
}
