import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatExpansionModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SlideOverlayModule } from './slide-overlay/slide-overlay.module';
import { TimelineComponent } from './timeline/timeline.component';
import { PanelComponent } from './panel/panel.component';
import { SomeComponent } from './some/some.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    PanelComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    SlideOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
