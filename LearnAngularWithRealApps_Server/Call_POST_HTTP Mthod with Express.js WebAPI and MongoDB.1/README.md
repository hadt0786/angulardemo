# MEAN APPLICATION

## Call GET HTTP Method with Express.JS WebApi and MongoDb

### Structure of Server Project

```
|
app
| |- - index.js
| |- - product.api.js
|
node modules
|
schemas
| |- - - product.schemas.js
|
server.js
```

### Create a Database

1.  Create a Database the name is **learning_angular**.
    This database have 1 collection **Product** collection

```
/_ Create a learn_angular _/

use lean_angular

/_ Create a Product collection _/

db.createCollection('product');

/_ Dumping data for 'product' collection _/

/_ 1 _/

{
"\_id": ObjectId("some junk number"),
"name": "Mobile 1",
"price": 10.0,
"quantity": 1.0,
"status": true
}

/_ 2 _/

{
"\_id": ObjectId("some junk number"),
"name": "Mobile 2",
"price": 30.0,
"quantity": 2.0,
"status": false
},

/_ 3 _/

{
"\_id": ObjectId("some junk number"),
"name": "Mobile 3",
"price": 30.0,
"quantity": 3.0,
"status": true
}

/_ 4 _/

{
"\_id": ObjectId("some junk number"),
"name": "Mobile 4",
"price": 40.0,
"quantity": 4.0,
"status": false
},

/_ 5 _/

{
"\_id": ObjectId("some junk number"),
"name": "Mobile 5",
"price": 50.0,
"quantity": 5.0,
"status": true
}
```

## Create A SERVER project

1.  Create a `learningAngularWithRealApps_Server`

## Install Mongoose

`npm install mongoose --save`

## Install Express.JS

`npm install express --save`
`npm install body-parser --save`
`npm install cookie-parser --save`
`npm install multer --save`

## Define Schema

1.  Create a **schemas** folder in NODE PROJECT.
2.  Create a **product.schema.js** file into **schemas**
3.  Declare schema for **product** collection as below:

```
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    quantity: Number,
    status: Boolean
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Product', ProductSchema, 'product');
```

## Create a REST API

1. Create a new folder named **api** inside the **server** project.
2. Create a **product.api.js** file inside **api** folder contains Rest APIs provides **application/JSON** data for the client

```
var mongoose = require('mongoose');
var Product = require('../schemas/product.schema');

var ProductAPI = {
  findAll: function(request, response){
    Product.find({}, function(error, products){
      if(error){
        throw erro;
      }
      else {
        response.status(200).json(products);
      }
    });
  }
};

module.exports = ProductAPI;
```

## Create Rest API ROUTING

1.  Inside the **api** folder creates a new file named **index.js**
2.  This file will hold all the routes needed for this rest api in server.

```
var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/learn_angular_5');

var ProductAPI = require('./product.api');

router.get('/product/findAll', ProductAPI.findAll);

module.exports = router;
```

## Create a REST API Server

1.  At the root of the server project create a file named, **server.js** . This will be the entry point into the node application. This will start and listen on a local port.

```
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true;
}));

app.use(bodyParser.json());

app.all('/*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET;PUT;POST;DELETE;OPT');
  res.header(Access-Control-Allow-Header', 'Content-type, Accept, X-Access-Token, X-key');

  if(res.method=='OPTIONS'){
    res.status(200).end;
  }
  else {
    next();
  }

});

app.use('/api', require('./api/index'));

var server = app.listen(9090, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log("server listening at http:/%s:%s",host,port);

});
```

### Structure of Server Project

```
|
app
| |- - index.js
| |- - product.api.js
|
node modules
|
schemas
| |- - - product.schemas.js
|
server.js
```

### Test REST APIs

1.  At the root of server project. Run the `node server.js`

2.  Access Rest API use the foolowing URL: `http://localhost:9090/api/product/findAll`

#### Output

```
{
  all the database that you have created
}
```

# Create A Client Project

Install the Angular

`npm install -g @angular/cli`

`ng g c mean-component`

### Create an **Entity**

1.  Create a new Folder **entities** in `src/app`
2.  Create a new file, named `product.entity.ts`

### Create a **Service**

1.  Create new folder named **services** in `src/app`.
2.  In this folder, create a new file, named `product.servoce.ts` contains method called `webapi`

```
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Product } from '../entities/product.entity';

@Injectable()

export class ProductService {

  private BASE_URL: string = 'http://localhost.9090/api/product';

  constructor (  private http: Http ){

  }

  findAll(): Observable<Product[]>{
    return this.http.get(this.BASE_URL+'findAll')
                    .map((res: Response)=>{
                      return res.json();
                    })

                    .catch((error: any) => {
                      return Observable.throw(new Error(error.status));
                    });
  }

}
```

### Create A Component

`ng g c app`
`app.component.ts` in `src/app`

```
import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { ProductService }    from '../services/product.services';
import { Product }           from './entities/product.entity';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.loadData();
  }

  loadData():void {
    this.productService.findAll().subscribe(
      res=>{
        this.products = res;
      },
      error => {
        console.log(error);
      }
    );
  }
}
```

### Create a VIEW

`app.component.html` in `src/app`

In this view, show product list from view

```
<h3> Product List </h3>

<table border="1">

<tr>
<th> Id </th>
<th> Name </th>
<th> Status </th>
<th> Price </th>
<th> Quantity </th>


</tr>

<tr *ngFor="let product of products">

  <td>{{product._id}}</td>
  <td>{{product._name}}</td>
  <td>{{product._status}}</td>
  <td>{{product._price}}</td>
  <td>{{product._quantity}}</td>
</tr>

</table>
```

### Add Component and Service to Module

`app.module.ts` in `src/app`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductService } from './services/product.service';

@NgModule ({
decalarations: [
AppComponent
],

imports: [
browserModule,
HttpModule
],

providers: [
ProductService
],
bootstrap:[
AppCOmponent
]
})

export class AppModule { }
```

## Run the Application

`ng s -o`
