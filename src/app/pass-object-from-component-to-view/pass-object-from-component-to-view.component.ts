import { Component, OnInit } from '@angular/core';
import { Product } from './../entity/product.entity';

@Component({
  selector: 'app-pass-object-from-component-to-view',
  templateUrl: './pass-object-from-component-to-view.component.html',
  styleUrls: ['./pass-object-from-component-to-view.component.css']
})
export class PassObjectFromComponentToViewComponent implements OnInit {
  product: Product;

  constructor() {}

  ngOnInit() {
    this.product = {
      id: 'p01',
      name: 'name 01',
      photo: 'thumb1.gif',
      price: 20,
      quantity: 6
    }; // check semicolon
  }
}
