import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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

  form: FormGroup;
  reasons: any[];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        reasons: [[]],
        comment: ['']
      }
    );
  }

  ngOnInit() {
  }

  submit() {
    this.emitForm.emit(this.form.value);
  }

}
