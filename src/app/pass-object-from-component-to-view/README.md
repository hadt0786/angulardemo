## Pass** OBJECT ** from Component to View

#### Add a photo to project

1. Create new folder **images** in `src/assets/images`

      -- Put some images into it **.gif** extension

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

1. -- `src/app/pass-object-from-component-to-view` using cli `ng g c pass-object-from-component-to-view`
    - `src/app/pass-object-from-component-to-view/PassObjectFromComponentToViewComponent.ts` 
        - create a **product object** to pass view
  `
  import { Product } from './../entity/product.entity';

  export class PassObjectFromComponentToViewComponent implements OnInit {

  product: Product;

  constructor() { }

  ngOnInit() {

    this.product={
      **remember ths is an object don't use semicolon ; use colon**
      id:'p01',
      name:'name test',
      photo: 'thumb1.gif',
      quantity: 6
    }
  }

}
 `
#### Create a View

1. - `src/app/pass-object-from-component-to-view/PassObjectFromComponentToViewComponent.html` . In this view , show product object from component
  
`
<h3> Product info</h3>

<table border="1">
  <tr>
    <td>Id</td>
    <td>{{product.id}}</td>
    </tr>
  <tr>
    <td>Nmae</td>
    <td>{{product.name}}</td>
    </tr> 
  <tr>
    <td>Photo</td>
    <td><img src="assets/images/{{product.photo}}" width="60"></td>
    </tr>

  <tr>
    <td>Price</td>
    <td>{{product.price}}</td>
    </tr>  
  <tr>
    <td>Quantity</td>
    <td>{{product.quantity}}</td>
    </tr>
  <tr>
    <td>Total</td>
    <td>{{product.price}}*{{product.quantity}}</td>
    </tr>
</table>
`

#### Add component tag to app.module.ts

1.  
  `
  import {PassObjectFromComponentToViewComponent} from './../pass-object-from-component-to-view';
  
  declaration :[PassObjectFromComponentToViewComponent]

  `
#### Add selector tag to app.module.html

1.  `src/app/pass-object-from-component-to-view` copy selector tag 'app-pass-object-from-component-to-view'
  
2.  paste this tag in `src/app/app.component.html <app-pass-object-from-component-to-view></app-pass-object-from-component-to-view> `
  
#### Run the application

1. `ng serve --open`
