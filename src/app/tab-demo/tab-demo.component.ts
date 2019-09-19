import { Component, OnInit } from '@angular/core';
import { TabDemoService } from './tab-demo.service';
import { Observable } from 'rxjs';
import { first, tap, pluck, map } from 'rxjs/operators';
import { MatTabChangeEvent } from '@angular/material/tabs';
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
export class TabDemoComponent implements OnInit {
  tabs$: Observable<Tab[]>;
  page = 1;
  constructor(private svc: TabDemoService) {

  }

  ngOnInit() {
    console.log('Tabs comp');
    this.tabs$ = this.getData(this.page)
      .pipe(
        map((t => { console.log('On load TTT ', t); return t}))
      );
  }

  tabChanged(t: MatTabChangeEvent) {
    // console.log('Tab change ', t.tab.textLabel);
    this.tabs$ = this.getData(this.page++)
      .pipe(map((t: Tab[]) => {
        console.log('TTTT', t);
        return t.map( _t => {return {..._t, count: _t.count++}})
      }));
  }

  getData(page) {
    return this.svc.getSomething().pipe(pluck('tabs'), tap(console.log))
  }
}
