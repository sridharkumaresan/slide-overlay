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
  moreleft;
  top;
  bottom;
  full;
  temp = [1,2,3];
  close() {
    this.defaultRight = false;
  }
}
