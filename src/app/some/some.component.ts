import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent implements OnInit {
  temp = [1,2,3];
  constructor() { }

  ngOnInit() {
  }

}
