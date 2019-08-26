import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { TableInterface } from './table.interface';
import { Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';

export class TableDataSource<T> extends DataSource<T> {
    constructor(private _table: TableInterface<T>, private _sort: MatSort, private _paginator: MatPaginator) {
        super();
    }

    connect(): Observable<T[]> {
        const displayDataChanges = [
            this._table.dataChange,
            this._sort.sortChange,
            this._paginator.page
        ];

        return merge(...displayDataChanges).pipe(
          map(() => {
            // const data = this.getSortedData();
          const data = this._table.data().slice();
          const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
           return data.splice(startIndex, this._paginator.pageSize);
        })
        );
    }

    disconnect() {}

    // getSortedData(): T[] {
    //     const data = this._table.data().slice();
    //     if (!this._sort.active || this._sort.direction === '') { return data; }

    //     return data.sort((a, b) => {
    //         const propertyA: number|string = a[this._sort.active];
    //         const propertyB: number|string = b[this._sort.active];

    //         const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
    //         const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

    //         return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    //     });
    // }
}
