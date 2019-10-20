import { pluck, switchMap, startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDataComponent implements OnInit {
  @Input() dropDownList;
  @Input() isLoading: boolean = false;
  @Output() emitForm: EventEmitter<any> = new EventEmitter();

  public barValue: number = 0;
  commentValueChange$;
  value = 0;
  bufferValue = 0;
  mode = 'determinate';
  color = `primary`;
  obj;

  form: FormGroup;
  reasons: any[];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        reasons: [[]],
        comment: ['', [Validators.maxLength(50)]]
      }
    );

    this.commentValueChange$ = this.form.valueChanges.pipe(
      pluck('comment'),
      startWith('')
    );

  }

  ngOnInit() {
  }

  submit() {
    this.emitForm.emit(this.form.value);
  }

  setProgressValue(e: any) {
    console.log('change ', typeof(e.value), e.value, typeof(e.color()), e.color());
    this.value = e.value;
    this.color = e.color();
    // console.log('color ', this.color());
  }

}

export function setcolor(v) {
  return {
    color() {
      switch (true) {
        case (v < 50):
          return `primary`
          break;
        case (v>= 50 && v <= 99):
          return `accent`
          break;
        case (v >= 100):
          return `warn`
          break;
        default:
          return `primary`
          break;
      }
    }
  };
}
