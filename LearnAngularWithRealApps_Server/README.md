# MEAN APPLICATION

## Call GET HTTP Method with Express.JS WebApi and MongoDb

### Structure of Server Project

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

### Create a Database

1.  Create a Database the name is **learning_angular**.
    This database have 1 collection **Product** collection

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


