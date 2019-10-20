import { Directive, ElementRef, Input, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appBarValue]'
})
export class BarValueDirective {
  _v;
  @Input('val')
  set val (val: number){
    this._v = val;
    this.setValue(val)
  }
  get val() {
    return this._v;
  }
  @Output() dataChange = new EventEmitter<any>();
  constructor() {

  }
  setValue(v) {
    this.dataChange.emit({
      value: Number(v),
      color() {
        switch (true) {
          case (this.value < 50):
            return `primary`
            break;
          case (this.value >= 50 && this.value <= 99):
            return `accent`
            break;
          case (this.value >= 100):
            return `warn`
            break;
          default:
            return `primary`
            break;
        }
      }
    });
  }
}
