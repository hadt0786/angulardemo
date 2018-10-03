import { Product } from './../entity/product.entity';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  find(): Product {
    return {
      id: 'p01',
      name: 'name1',
      photo: 'thumb1.gif',
      price: 20,
      quantity: 3
    };
  }


  findAll(): Product[] {
    return [
      {
      id: 'p01',
      name: 'name1',
      photo: 'thumb1.gif',
      price: 201,
      quantity: 1
    },

      {
      id: 'p02',
      name: 'name2',
      photo: 'thumb2.gif',
      price: 202,
      quantity: 2
    },

      {
      id: 'p03',
      name: 'name3',
      photo: 'thumb3.gif',
      price: 203,
      quantity: 3
    }

    ];
  }

}
