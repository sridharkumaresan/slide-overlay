import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatExpansionModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SlideOverlayModule } from './slide-overlay/slide-overlay.module';
import { TimelineComponent } from './timeline/timeline.component';
import { PanelComponent } from './panel/panel.component';
import { SomeComponent } from './some/some.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTableDemoComponent } from './data-table-demo/data-table-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    PanelComponent,
    SomeComponent,
    DataTableComponent,
    DataTableDemoComponent,
    TabDemoComponent,
    ScrollContainerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule ,
    MatProgressSpinnerModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    SlideOverlayModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
