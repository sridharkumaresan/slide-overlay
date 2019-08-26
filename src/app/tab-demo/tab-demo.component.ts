import { Component, OnInit } from '@angular/core';
import { TabDemoService } from './tab-demo.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
export interface Tab {
  key: string;
  value: string;
  count: number;
}
@Component({
  selector: 'app-tab-demo',
  templateUrl: './tab-demo.component.html',
  styleUrls: ['./tab-demo.component.scss']
})
export class TabDemoComponent implements OnInit {
  tabs$: Observable<Tab[]>;
  constructor(private svc: TabDemoService) {

  }

  ngOnInit() {
    console.log('Tabs comp');
    this.tabs$ = this.svc.getData();
  }

}
