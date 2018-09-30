import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-values-from-component-to-view',
  templateUrl: './pass-values-from-component-to-view.component.html',
  styleUrls: ['./pass-values-from-component-to-view.component.css']
})
export class PassValuesFromComponentToViewComponent implements OnInit {
  age: number;
  fullName: string;
  email: any;
  status: boolean;

  constructor() {}

  ngOnInit() {
    this.age = 20;
    this.email = 'abc@gmail.com';
    this.fullName = 'Akash';
    this.status = true;
  }
}
