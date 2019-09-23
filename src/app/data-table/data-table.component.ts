import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnDestroy {
  public gridData$ = new BehaviorSubject<any[]>([]);
  @Input() selection: SelectionModel<any>;
  @Output() selectionChange = new EventEmitter();

  @Input()
  set data(value: any) {
    this.gridData$.next(value);
  }
  get data(){
    return this.gridData$.getValue();
  }

  displayedColumns: string[] = ['select', 'first_name', 'gender', 'ip_address', 'updated'];
  private unsubscribe$ = new Subject<void>();
  constructor() { }

  ngOnInit() {
    this.selection.changed
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      changes => {this.selectionChange.emit(this.selection);}
    )
  }

  ngOnDestroy() : void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
