import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor{

  @Input() progress = 0;
  onChange: Function;
  public file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    console.log('Change -> ', file);
    this.onChange(file);
    this.file = file;
  }

  @ViewChild(MatRipple, {static: false}) ripple: MatRipple;


  constructor( private host: ElementRef<HTMLInputElement> ) {
  }
  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }

  launchRipple() {
    const rippleRef = this.ripple.launch({
      centered: true
    });

    // Fade out the ripple later.
    rippleRef.fadeOut();
  }

}
