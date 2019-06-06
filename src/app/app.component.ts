import { Component, OnInit, AfterContentInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent implements OnInit, AfterContentInit {
  title = "validation-bindings";
  textValue: string = "test 123 ///!";
  textValue2: string = "test 321 ///!";
  textValue3: string = "test";
  textValue4: string;

  minLength = 5;
  maxLength = 15;
  required = '';
  pattern = /^[\w\d]*$/;

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    setTimeout(() => (this.textValue = "test123"), 1500);
  }
}
