import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slide-overlay';
  defaultRight;
  left;
  top;
  bottom;
  full;

  close() {
    this.defaultRight = false;
  }
}
