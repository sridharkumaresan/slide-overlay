import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rfi',
  templateUrl: './rfi.component.html',
  styleUrls: ['./rfi.component.scss'],
})
export class RfiComponent implements OnInit {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

}
