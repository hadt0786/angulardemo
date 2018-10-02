import { Component, OnInit } from '@angular/core';

import { Category } from './../entities/category.entity';

@Component({
  selector: 'app-select-element-from-list-with-change-event',
  templateUrl: './select-element-from-list-with-change-event.component.html',
  styleUrls: ['./select-element-from-list-with-change-event.component.css']
})
export class SelectElementFromListWithChangeEventComponent implements OnInit {
  result: string;
  category: Category[];

  constructor() {}

  ngOnInit() {

    this.category = [
      {
        id: 'c1',
        name: 'category1'
      },
      {
        id: 'c2',
        name: 'category2'
      },
      {
        id: 'c3',
        name: 'category3'
      },
      {
        id: 'c4',
        name: 'category4'
      },
    ];

  }

  display(event: any): void {
    this.result = 'Category ID is : ' + event.traget.value;
  }
}
