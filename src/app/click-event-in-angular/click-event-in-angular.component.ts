import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-event-in-angular',
  templateUrl: './click-event-in-angular.component.html',
  styleUrls: ['./click-event-in-angular.component.css']
})
export class ClickEventInAngularComponent implements OnInit {

  result = ''; // result : string = '';


  constructor() { }

  ngOnInit() {

  }

clickMe(): void {
  this.result = 'Hello world';

}

}
