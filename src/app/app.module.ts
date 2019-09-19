import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { MaterialModule } from './material/material.module';
import { FileUploadFormComponent } from './file-upload-form/file-upload-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadListComponent } from './file-upload-list/file-upload-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    PanelComponent,
    SomeComponent,
    DataTableComponent,
    DataTableDemoComponent,
    TabDemoComponent,
    ScrollContainerComponent,
    FileUploadFormComponent,
    FileUploadComponent,
    FileUploadListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SlideOverlayModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
