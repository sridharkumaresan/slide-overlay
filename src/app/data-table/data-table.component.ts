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
  @Input()
  set data(value: any) {
    this.gridData$.next(value);
  }
  get data(){
    return this.gridData$.getValue();
  }

  @Output()
  selectedData: EventEmitter<any[]> = new EventEmitter();
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = ['select', 'first_name', 'gender', 'ip_address', 'updated'];
  private unsubscribe$ = new Subject<void>();
  constructor() { }

  ngOnInit() {
    this.selection.changed
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      changes => {this.selectedData.emit(this.selection.selected);}
    )
  }

  ngOnDestroy() : void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.data.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle(ref) {
  //   if (this.isSomeSelected()) {
  //     this.selection.clear();
  //     ref.checked=false;

  //   } else {
  //     this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.data.data.forEach(row => this.selection.select(row));
  //   }
  // }

  // isSomeSelected = () => this.selection.selected.length > 0

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: any): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

}
