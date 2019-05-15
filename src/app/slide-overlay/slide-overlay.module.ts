import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlideOverlayComponent } from './slide-overlay.component';

@NgModule({
  declarations: [SlideOverlayComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [SlideOverlayComponent]
})
export class SlideOverlayModule { }
