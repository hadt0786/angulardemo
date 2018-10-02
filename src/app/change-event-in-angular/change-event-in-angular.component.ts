import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-event-in-angular',
  templateUrl: './change-event-in-angular.component.html',
  styleUrls: ['./change-event-in-angular.component.css']
})
export class ChangeEventInAngularComponent implements OnInit {

  result = '';

  constructor() { }

  ngOnInit() {
  }

  display(event: any): void {
    this.result = 'Category' + event.target.value;
  }

}
