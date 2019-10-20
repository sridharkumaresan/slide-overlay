import { RfiComponent } from './../rfi/rfi.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabDemoComponent } from '../tab-demo/tab-demo.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: TabDemoComponent,
    outlet: 'popup'
  },
  {
    path: 'rfi',
    component: RfiComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: TabDemoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
