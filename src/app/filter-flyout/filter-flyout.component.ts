import { FilterService } from './../filter.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-flyout',
  templateUrl: './filter-flyout.component.html',
  styleUrls: ['./filter-flyout.component.scss']
})
export class FilterFlyoutComponent implements OnInit {
  openFilter;
  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.openFilter$.subscribe(shouldOpen => this.openFilter = shouldOpen)
  }

}
