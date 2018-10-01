import { Component, OnInit } from '@angular/core';

import { Product } from './../entity/product.entity';


@Component({
  selector: 'app-pass-objects-list-from-component-to-view',
  templateUrl: './pass-objects-list-from-component-to-view.component.html',
  styleUrls: ['./pass-objects-list-from-component-to-view.component.css']
})
export class PassObjectsListFromComponentToViewComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit() {
    // remember to include [] brakets beacuase product is an array

    this.products = [{
      id: 'p01',
      name: 'name 1',
      photo: 'thumb1.gif',
      quantity: 6,
      price: 20
    },
    {
      id: 'p01',
      name: 'name 1',
      photo: 'thumb1.gif',
      quantity: 6,
      price: 20
    },
    {
      id: 'p01',
      name: 'name 1',
      photo: 'thumb1.gif',
      quantity: 6,
      price: 20
    }
  ];
}
}
