import  { ACTIONS, ActionMaker, ActionService } from './../action.service';
import { DemoService } from './demo.service';
import { Component, OnInit, Input } from '@angular/core';
import { filter, tap, pluck, map } from 'rxjs/operators';
import { noop as _noop } from 'lodash-es';
import { MatTableDataSource } from '@angular/material';
import { TabDemoService } from '../tab-demo/tab-demo.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.scss']
})
export class DataTableDemoComponent implements OnInit {
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>();
  selection = new SelectionModel<any>(true, [], true);
  limit: number = 1000;
  full: boolean = true;
  data$;
  actionFlyoutData: ActionMaker;
  ACTIONS = ACTIONS;
  @Input() page;
  constructor(private demoService: DemoService, private actionService: ActionService) {
    console.log('Cons ', this.selection);
  }

  ngOnInit() {
    this.buildData();
  }

  buildData = (): void => {
    this.demoService.getData()
    .pipe(filter(data => data))
    .subscribe((d: any[]) => {
        const data: any[] = this.dataSource ? [...this.dataSource.data, ...d] : [];
        this.dataSource = new MatTableDataSource(data)});
  }

  handleScroll = (scrolled: boolean) => {
    scrolled ? this.buildData() : _noop();
  }

  hasMore = () => !this.dataSource || this.dataSource.data.length < this.limit;

  doAction(action: ACTIONS) {
    const selected: any[] = this.selection.selected;
    this.selection = new SelectionModel(true, [ ...selected ], true);
    this.actionFlyoutData = ActionMaker.create({action: action, items: selected});
    this.actionService.announceAction(this.actionFlyoutData);
  }

}
