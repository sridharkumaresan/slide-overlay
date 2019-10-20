import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, Renderer2, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { Helper } from './helper';
import { slideAnimation } from './_animation';

@Component({
  selector: 'bd-slide-overlay',
  templateUrl: './slide-overlay.component.html',
  styleUrls: ['./slide-overlay.component.scss'],
  animations: slideAnimation
})
export class SlideOverlayComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() position: string = 'right';

  @Input() fullScreen: boolean;

  @Input() appendTo: string;

  @Input() blockScroll: boolean = false;

  @Input() style: any;

  @Input() styleClass: string;

  @Input() autoZIndex: boolean = true;

  @Input() baseZIndex: number = 0;

  @Input() modal: boolean = true;

  @Input() dismissible: boolean = true;

  @Input() showCloseIcon: boolean = true;

  @ViewChild('container', {static: false}) containerViewChild: ElementRef;

  @Output() onShow: EventEmitter<any> = new EventEmitter();

  @Output() onHide: EventEmitter<any> = new EventEmitter();

  @Output() visibleChange: EventEmitter<any> = new EventEmitter();

  initialized: boolean;

  _visible: boolean;

  preventVisibleChangePropagation: boolean;

  mask: HTMLDivElement;

  maskClickListener: Function;

  executePostDisplayActions: boolean;

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initialized = true;

    if (this.appendTo) {
      if (this.appendTo === 'body')
        document.body.appendChild(this.containerViewChild.nativeElement);
      else
        Helper.appendChild(this.containerViewChild.nativeElement, this.appendTo);
    }

    if (this.visible) {
      this.show();
    }
  }

  @Input() get visible(): boolean {
    return this._visible;
  }

  set visible(val: boolean) {
    this._visible = val;

    if (this.initialized && this.containerViewChild && this.containerViewChild.nativeElement) {
      if (this._visible)
        this.show();
      else {
        if (this.preventVisibleChangePropagation)
          this.preventVisibleChangePropagation = false;
        else
          this.hide();
      }
    }
  }

  ngAfterViewChecked() {
    if (this.executePostDisplayActions) {
      this.onShow.emit({});
      this.executePostDisplayActions = false;
    }
  }

  show() {
    this.executePostDisplayActions = true;
    if (this.autoZIndex) {
      this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++Helper.zindex));
    }

    if (this.modal) {
      this.enableModality();
    }
  }

  hide() {
    this.onHide.emit({});

    if (this.modal) {
      this.disableModality();
    }
  }

  close(event: Event) {
    this.preventVisibleChangePropagation = true;
    this.hide();
    this.visibleChange.emit(false);
    event.preventDefault();
  }

  enableModality() {
    if (!this.mask) {
      this.mask = document.createElement('div');
      this.mask.style.zIndex = String(parseInt(this.containerViewChild.nativeElement.style.zIndex) - 1);
      Helper.addMultipleClasses(this.mask, 'overlay bd-sideoverlay-mask');

      if (this.dismissible) {
        this.maskClickListener = this.renderer.listen(this.mask, 'click', (event: any) => {
          if (this.dismissible) {
            this.close(event);
          }
        });
      }

      document.body.appendChild(this.mask);
      if (this.blockScroll) {
        Helper.addClass(document.body, 'bd-body-overflow-hidden');
      }
    }
  }

  disableModality() {
    if (this.mask) {
      this.unbindMaskClickListener();
      document.body.removeChild(this.mask);
      if (this.blockScroll) {
        Helper.removeClass(document.body, 'bd-body-overflow-hidden');
      }
      this.mask = null;
    }
  }

  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }

  ngOnDestroy() {
    this.initialized = false;

    if (this.visible) {
      this.hide();
    }

    if (this.appendTo) {
      this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
    }

    this.unbindMaskClickListener();
  }
}
