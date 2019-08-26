import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { TableDataSource } from './table.datasource';

export interface TableInterface<T>{
    displayedColumns: string[];
    dataChange: BehaviorSubject<T[]>;
    data(): T[];
    dataSource: TableDataSource<T>
}
