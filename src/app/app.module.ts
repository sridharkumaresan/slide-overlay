import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SlideOverlayModule } from './slide-overlay/slide-overlay.module';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    SlideOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
