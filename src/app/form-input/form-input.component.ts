import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  Output,
} from "@angular/core";
import { FormGroup, NgForm, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["./form-input.component.css"],
})
export class FormInputComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() parentFormGroup: FormGroup | NgForm;
  @Input() value: string;
  @Input() name: string;
  @Input() placeholder: string;

  @Output() valueChange = new EventEmitter<string>();

  inputControl = new FormControl("");
  required = null;
  maxLength = null;
  minLength = null;
  max = null;
  min = null;
  pattern = null;

  ngOnInit(): void {
    this.inputControl.valueChanges.subscribe(value =>
      this.valueChange.emit(value),
    );
    // this.inputControl.setValue(this.value, { emitEvent: false });
    // this.inputControl.markAsPristine();
    // this._addFormControlToGroup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.formGroup && changes.formGroup.currentValue) {
      this._addFormControlToGroup();
    }
    if (!!changes.value) {
      this.inputControl.setValue(changes.value.currentValue, {
        emitEvent: false,
      });
    }
  }

  ngAfterContentInit(): void {
    this.inputControl.setValidators([
      Validators.maxLength(15),
      Validators.minLength(5),
      Validators.pattern(/^[\w\d]*$/),
      Validators.required,
    ]);
    setTimeout(() => {
      this.required = "";
      this.max = 150;
      this.maxLength = 15;
      this.minLength = 5;
      this.min = 0;
      this.pattern = /^[\w\d]*$/;
    }, 555);
  }

  private _addFormControlToGroup() {
    if (!!this.parentFormGroup) {
      let formGroup: FormGroup;
      if (this.parentFormGroup instanceof FormGroup) {
        formGroup = this.parentFormGroup;
      } else if (this.parentFormGroup instanceof NgForm) {
        formGroup = this.parentFormGroup.form;
      }
      if (formGroup.contains("textInput")) {
        formGroup.setControl("textInput", this.inputControl);
      } else {
        formGroup.addControl("textInput", this.inputControl);
      }
    }
  }
}
