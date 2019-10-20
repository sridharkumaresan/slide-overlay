import  { ACTIONS, ActionMaker, ActionService } from './../action.service';
import { DemoService } from './demo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { noop as _noop } from 'lodash-es';
import { MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DemoDataSource } from './demo-data.source';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.scss']
})
export class DataTableDemoComponent implements OnInit {
  selection = new SelectionModel<any>(true, [], true);
  @Input() demoDataSource: DemoDataSource;
  @Output() scrollEmitter: EventEmitter<any> = new EventEmitter();
  full: boolean = true;
  actionFlyoutData: ActionMaker;
  ACTIONS = ACTIONS;
  showIcon: boolean = false;
  constructor(private demoService: DemoService, private actionService: ActionService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  buildData = (): void => {

  }

  reset() {

  }

  // TODO:: Change this logic
  hasMore = () => true; //!this.dataSource || this.dataSource.data.length < this.limit;
  onScroll = () => this.handleScroll(true);
  handleScroll = (scrolled: boolean) => {
    // scrolled ? this.buildData() : _noop();

    scrolled ? this.loadMoreData(): _noop();
  }

  doAction(action: ACTIONS) {
    const selected: any[] = this.selection.selected;
    this.selection = new SelectionModel(true, [ ...selected ], true);
    this.actionFlyoutData = ActionMaker.create({action: action, items: selected});
    this.actionService.announceAction(this.actionFlyoutData);
  }

  loadMoreData() {
    console.log('Loading More Data...');
    // this.demoDataSource.loadData('asc');
    this.showIcon = true;
    this.scrollEmitter.emit(true);
  }

  applySort = (e: MatSort): void => {
    console.log('Sorting Changed ', e.direction);
    this.demoDataSource.reset();
    this.loadMoreData();
  }
  scroll(el: HTMLElement) {
    this.showIcon = false;
    el.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'})
  }
  onUp(ev) {
  }
}
