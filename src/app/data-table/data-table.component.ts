import { TABLE_COLUMNS } from './data.constants';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnDestroy, AfterViewInit {
  // public gridData$ = new BehaviorSubject<any[]>([]);
  private _data;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @Input() selection: SelectionModel<any>;
  @Output() selectionChange = new EventEmitter();
  @Output() sortChange = new EventEmitter();

  @Input()
  set data(value: any) {
    this._data = value;
    // this.gridData$.next(value);
  }
  get data(){
    // return this.gridData$.getValue();
    return this._data;
  }

  displayedColumns: string[] = TABLE_COLUMNS;
  private unsubscribe$ = new Subject<void>();
  constructor() { }

  ngOnInit() {
    this.selection.changed
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      changes => {this.selectionChange.emit(this.selection);}
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.pipe(
      tap((e) => {
        this.sortChange.emit(e);
      })
    )
    .subscribe();
  }
}
