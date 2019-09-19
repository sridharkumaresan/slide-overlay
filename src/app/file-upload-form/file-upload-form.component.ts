import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { requiredFileSize } from './file-upload-size-validator';

@Component({
  selector: 'app-file-upload-form',
  templateUrl: './file-upload-form.component.html',
  styleUrls: ['./file-upload-form.component.scss']
})
export class FileUploadFormComponent implements OnInit {
  @Input('reset')
  set reset(reset: boolean) {
    console.log('Resetting...', reset);
    if(reset) {
      this.resetForm();
    }
  }
  get reset() {
    return;
  }
  @Input('maxFileSize') maxFileSize: number = 10;
  @Output('file') file: EventEmitter<File> = new EventEmitter();
  uploadForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.uploadForm = new FormGroup({
      attachment: new FormControl(null, [Validators.required, requiredFileSize(this.maxFileSize)])
    });
  }

  submit() {
    console.log('Files Value -> ', this.uploadForm.value);
    console.log('Form Valid -> ', this.uploadForm.valid);
    if (this.uploadForm.valid) {
      this.file.emit(this.uploadForm.value);
    } else {
        markAllAsDirty(this.uploadForm);
        return;
    }
  }

  resetForm() {
    this.uploadForm.get('attachment').reset();
  }

  hasError( field: string, error: string ) {
    const control = this.uploadForm.get(field);
    return control.dirty && control.hasError(error);
  }

}

export function markAllAsDirty( form: FormGroup ) {
  for ( const control of Object.keys(form.controls) ) {
    form.controls[control].markAsDirty();
  }
}

export function toFormData<T>( formValue: T ) {
  const formData = new FormData();

  for ( const key of Object.keys(formValue) ) {
    const value = formValue[key];
    formData.append(key, value);
  }

  return formData;
}
