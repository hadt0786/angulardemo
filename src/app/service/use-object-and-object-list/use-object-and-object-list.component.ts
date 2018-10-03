import { ProductService } from './src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../entity/product.entity';

// tslint:disable-next-line:max-line-length
// [Angular] Can't resolve all parameters for UseObjectAndObjectListComponent in /home/akash/Documents/My WorkSpce/Angular-Projects/learningangular5/angulardemo/src/app/service/use-object-and-object-list
// /use-object-and-object-list.component.ts: (?).
// Solution -- > Include this service in app.module.ts

@Component({
  selector: 'app-use-object-and-object-list',
  templateUrl: './use-object-and-object-list.component.html',
  styleUrls: ['./use-object-and-object-list.component.css']
})
export class UseObjectAndObjectListComponent implements OnInit {
  product: Product;
  products: Product[];

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.product = this.productService.find();
    this.products = this.productService.findAll();
  }
}
