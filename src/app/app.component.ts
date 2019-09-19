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

  files: File[] = [];
  close() {
    this.defaultRight = false;
  }



  getFile(file: any) {
    const _file: File = file.attachment;
    this.left=false;
    this.files.push(file);
    console.log('Get Files method ', this.files);
  }

  upload() {
    console.log('Uploading... ', this.files);
  }
}
