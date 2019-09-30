import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() openFilter: EventEmitter<boolean> = new EventEmitter();

  myControl = new FormControl();
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  constructor() { }

  ngOnInit() {
  }

}
