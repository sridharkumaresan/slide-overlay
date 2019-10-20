import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective {
  @Input()
  set scroll(s) {
    if (s) {
      this.eleRef.nativeElement.scrollTo(0,0);
    }
  }
  constructor(private eleRef: ElementRef) {
    console.log('Element Ref ', eleRef);
  }

}
