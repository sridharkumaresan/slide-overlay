import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SlideOverlayModule } from './slide-overlay/slide-overlay.module';

@NgModule({
  declarations: [
    AppComponent
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
