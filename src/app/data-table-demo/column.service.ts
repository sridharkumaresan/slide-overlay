import { Injectable } from '@angular/core';


type Ctor<T> = new () => T;
function create<T>(ctor: Ctor<T>, data: T): T {
   return Object.assign(new ctor(), data)
}

export class BaseColumn {
  columnDef: string;
  header: string;
  dataName: () => {};
}

function createColumn(col: any): BaseColumn {
  console.log('Creating Column ', col);
  const { columnDef, header, dataName } = col;
  return create(BaseColumn, {
    columnDef,
    header,
    dataName
  })
}

function createColumns(data: any): BaseColumn[] {
  const { columns } = data;
  return columns.map(createColumn);
}

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  constructor() { }
  public getColumns = (data) => {
    return createColumns(data);
  }
}
