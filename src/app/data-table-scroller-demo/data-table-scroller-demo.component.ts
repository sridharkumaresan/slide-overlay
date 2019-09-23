import { Component, OnInit } from '@angular/core';
import { TableDataSource } from './data-source';
import { DemoService } from '../data-table-demo/demo.service';

@Component({
  selector: 'app-data-table-scroller-demo',
  templateUrl: './data-table-scroller-demo.component.html',
  styleUrls: ['./data-table-scroller-demo.component.scss']
})
export class DataTableScrollerDemoComponent implements OnInit {
  dataSource: TableDataSource;
  constructor(private demoService: DemoService) {
    this.dataSource = new TableDataSource(demoService);
  }

  ngOnInit() {
  }

}
