import { DemoService } from './demo.service';
import { Component, OnInit, Input } from '@angular/core';
import { filter, tap, pluck, map } from 'rxjs/operators';
import { noop as _noop } from 'lodash-es';
import { MatTableDataSource } from '@angular/material';
import { TabDemoService } from '../tab-demo/tab-demo.service';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.scss']
})
export class DataTableDemoComponent implements OnInit {
  dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>();
  limit: number = 1000;
  full: boolean = true;
  data$;
  @Input() page;
  constructor(private demoService: DemoService, private svc: TabDemoService) { }

  ngOnInit() {
    this.buildData();
    this.data$ = this.getData(this.page)
      .pipe(
        map(d => { return {...d, ip: `ip_address${this.page}`}})
      )
  }
  getData(page) {
    return this.svc.getSomething().pipe(pluck('data'), tap(console.log))
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

  selectedData = (e) => {
    console.log('Selected Data => ', e)
  }

}
