## PASS OBJECTS LIST FROM COMPONENT TO VIEW

#### Add photo to Project

1. Create a new folder name **assets** . Copy photo files to this folder.

#### Create an **ENTITY**

1.  -- create new folder named **entity** in **src/app/entity**. In this folder create an new file, named **product.entity.ts** or `ng g class entity/product`

export class Product{
id:string;
name:dtring;
photo:string;
price:number;
quatity:number;
}

#### Create a Component

1. -- `src/app/pass-objects-list-from-component-to-view` using cli `ng g c    pass-objects-list-from-component-to-view`
   - `src/app/pass-objects-list-from-component-to-view/PassObjectsListFromComponentToViewComponent.ts`
     - create a **product object** to pass view

```
import { Product } from './../entity/product.entity';

export class PassObjectFromComponentToViewComponent implements OnInit {

product: Product;

constructor() { }

ngOnInit() {

    this.product= {
      **remember ths is an object don't use semicolon ; use colon**
      id:'p01',
      name:'name test1',
      photo: 'thumb1.gif',
      price: 20,
      quantity: 6
    },
    {
      **remember ths is an object don't use semicolon ; use colon**
      id:'p02',
      name:'name test2',
      photo: 'thumb2.gif',
      price: 12,
      quantity:3
    },
    {
      **remember ths is an object don't use semicolon ; use colon**
      id:'p03',
      name:'name test3',
      photo: 'thumb3.gif',
      price: 14,
      quantity: 8
    }

};

}
```

#### Create a View

1. - `src/app/pass-objects-list-from-component-to-view/PassObjectsListFromComponentToViewComponent.html` . In this view , show product object from component

...

<h3> Product info</h3>

<table border="1">
  <tr>
  <th>Id</th>
  <th>Name</th>
  <th>Photo</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Sub Total</th>
  </tr>

<tr *ngFor="let product of products">
<td>{{product.id}} </td>
<td>{{product.name}} </td>
<td><img src="./../../assets/images/{{product.photo}}" width="60"></td>
<td>{{product.price}} </td>
<td>{{product.quantity}} </td>
<td>{{product.quantity}}*{{product.price}} </td>

</tr>

</table>
...

#### Add component tag to app.module.ts

1.

`
import {PassObjectFromComponentToViewComponent} from './../pass-object-from-component-to-view';

declaration :[PassObjectFromComponentToViewComponent]

`

#### Add selector tag to app.module.html

1.  `src/app/pass-object-from-component-to-view` copy selector tag 'app-pass-object-from-component-to-view'

2.  paste this tag in `src/app/app.component.html <app-pass-object-from-component-to-view></app-pass-object-from-component-to-view>`

#### Run the application

1. `ng serve --open`
