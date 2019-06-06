import {
  Component,
  EventEmitter,
  Input,
  AfterContentInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["./form-input.component.css"],
})
export class FormInputComponent implements AfterContentInit {
  @Input() value: string;
  @Input() name: string;
  @Input() placeholder: string;

  @Output() valueChange = new EventEmitter<string>();

  required = null;
  maxLength = null;
  minLength = null;
  pattern = null;

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.required = "";
      this.maxLength = 15;
      this.minLength = 5;
      this.pattern = /^[\w\d]*$/;
    }, 10);
  }
}
