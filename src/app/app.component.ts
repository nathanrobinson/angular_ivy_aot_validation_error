import { Component, OnInit, AfterContentInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

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

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    setTimeout(() => (this.textValue = "test123"), 1500);
  }
}
