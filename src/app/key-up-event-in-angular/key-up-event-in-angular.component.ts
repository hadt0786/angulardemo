import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-up-event-in-angular',
  templateUrl: './key-up-event-in-angular.component.html',
  styleUrls: ['./key-up-event-in-angular.component.css']
})
export class KeyUpEventInAngularComponent implements OnInit {

  result = '';

  constructor() { }

  ngOnInit() {
  }

  display(event: any): void {
    this.result = 'hello' + event.target.value;
  }

}
