## Create and Use Service IN ANGULAR

#### INSTALL ANGULAR

  `npm instal -g @angular/cli`

#### Create an **ENTITY**

1.  Create New Folder named **ENTITY** in `src/app/entity` create a new file `product.entity.ts`
   
`ng g class entity/product`

export class Product {
  id: string;
  name: string;
  photo: string;
  price: number;
  quantity: number;
}

#### Create a **Service** 

  `ng g s services/product`

  `src/app/service/use-object-and-object-list`

```
import { Injectable } from '@angular/core';
import { Product } from './src/app/entity/product.entity';

@Injectable ()
export class ProductService {

  find():Product{
    return {
      id:'p01',
      name:'name1',
      photo:'thumb1.gif',
      price: 20,
      quantity: 3
    };
  }

  findAll():Product[]{
    return [
      {
      id:'p01',
      name:'name1',
      photo:'thumb1.gif',
      price: 201,
      quantity: 01
    },

      {
      id:'p02',
      name:'name2',
      photo:'thumb2.gif',
      price: 202,
      quantity: 02
    },
    
      {
      id:'p03',
      name:'name3',
      photo:'thumb3.gif',
      price: 203,
      quantity: 03
    }
    
    ];
  }
}

```
#### Create a Component 


