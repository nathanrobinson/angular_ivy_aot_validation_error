import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["./form-input.component.css"],
})
export class FormInputComponent {
  @Input() value: string;
  @Input() name: string;
  @Input() placeholder: string;

  @Output() valueChange = new EventEmitter<string>();

  required = "";
  maxLength = 15;
  minLength = 5;
  pattern = /^[\w\d]*$/;
}
