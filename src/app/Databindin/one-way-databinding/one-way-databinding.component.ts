import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-one-way-databinding',
  templateUrl: './one-way-databinding.component.html',
  styleUrls: ['./one-way-databinding.component.css']
})
export class OneWayDatabindingComponent implements OnInit {

  result = '';

  constructor() { }

  ngOnInit() {
    this.result = 'use one way binding';
  }

}
