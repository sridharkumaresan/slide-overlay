import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { CdkTableDemoComponent } from './cdk-table-demo/cdk-table-demo.component';
import { ActionFlyoutComponent } from './action-flyout/action-flyout.component';
import { DataTableScrollerDemoComponent } from './data-table-scroller-demo/data-table-scroller-demo.component';
import { FormDataComponent } from './action-flyout/form-data/form-data.component';
import { SearchComponent } from './search/search.component';
import { FilterFlyoutComponent } from './filter-flyout/filter-flyout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollTopDirective } from './scroll-top.directive';
import { BarValueDirective } from './action-flyout/form-data/bar-value.directive';
import { RfiComponent } from './rfi/rfi.component';



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
    FileUploadListComponent,
    CdkTableDemoComponent,
    ActionFlyoutComponent,
    DataTableScrollerDemoComponent,
    FormDataComponent,
    SearchComponent,
    FilterFlyoutComponent,
    HeaderComponent,
    ScrollTopDirective,
    BarValueDirective,
    RfiComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    SlideOverlayModule,
    HttpClientModule,
    ScrollingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
