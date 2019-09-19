import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-file-upload-list',
  templateUrl: './file-upload-list.component.html',
  styleUrls: ['./file-upload-list.component.scss']
})
export class FileUploadListComponent implements OnInit, OnChanges {
  private _fileSet;
  @Input('fileSet')
  set fileSet(fileSet: File[]) {
    this._fileSet = fileSet;
    console.log('Receiving Files ', fileSet);
  }
  get fileSet() {
    return this._fileSet
  }
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  removeFile(file) {
    this.fileSet.splice(this.fileSet.indexOf(file), 1);
  }
}
