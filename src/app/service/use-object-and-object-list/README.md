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
```

#### Create a Component `ng g c service/use-object-and-list`

1.  In the `src/app/service/use-object-and-list.coponent.ts`

```
import { ProductService } from '.src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../entity/product.entity';

// tslint:disable-next-line:max-line-length
// [Angular] Can't resolve all parameters for UseObjectAndObjectListComponent in /home/akash/Documents/My WorkSpce/Angular-Projects/learningangular5/angulardemo/src/app/service/use-object-and-object-list
// /use-object-and-object-list.component.ts: (?).
// Solution -- > Include this service in app.module.ts


@Component ({
  selector: 'app-use-object-and-object-list',
  templateUrl: './use-object-and-object-list.component.html',
  styleUrls: ['./use-object-and-object-list.component.css']
})
export class UseObjectAndObjectListComponent implements OnInit {
  product: Product;
  products: Product[];

  constructor(private productService: ProductService) {

  }
  ngOnInit() {
    this.product = this.productService.find();
    this.products = this.productService.findAll();
  }
}
```
2.  Incluse the service in `app.module.ts` in providers
  
`app.module.ts`

```
import { ProductService } from '.src/app/services/product.service';

providers : [ProductService ]
```
#### Create A **VIEW**

1. `src/app/service/use-object-and-object-list.component.html`

```
<h3>Product Info</h3>

<table border="1">

<tr>
<td>Id </td>
<td>{{product.id}}</td>
</tr>

<tr>
<td>Name</td>
<td>{{product.name}}</td>
</tr>

<tr>
<td>Photo</td>
<td>
<img src="assests/images/{{product.photo}}">
</td>
</tr>

<tr>
<td>Proce</td>
<td>{{product.price}}</td>
</tr>

<tr>
<td>Quantity</td>
<td>{{product.quantity}}</td>
</tr>

</table>

<h3>Product list</h3>
<table border="1">
<tr>
      <th>ID</th>
      <th>Name</th>
      <th>Photo</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Sub Total</th>
</tr>

      <tr *ngFor="let p of products">
        <td>{{p.id}}</td>
        <td>{{p.name}}</td>
        <td>
        <img src="assessts/images/{{p.photo}}">
        </td>
        <td>{{p.price}}</td>
        <td>{{p.quantity}}</td>
        <td>{{p.price}}*{{p.quantity}}</td>
      </tr>
</table>
```

#### Add Component to MODULE

`app.module.ts`

```
  import { BrowserModule } from '@angular/browser-platform';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';

  import { ProductServices } from './services/produt.services';

  import { UseObjectAndObjectList } from './src/app/service/use-object-and-object-list.component';

  @NgModule ({
    declaration: [
      UseObjectAndObjectList
    ],

    imports: [
      BrowserModule,
      FormsModule
    ],

    providers: [
      ProductService
    ],
    bootstrap: [AppComponent]
  })

  export class AppModule { }
```

#### Add selector tag to `app.component.html`

#### Run the app `ng s -o`
