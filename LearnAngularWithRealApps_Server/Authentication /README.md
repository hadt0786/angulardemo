# MEAN APPLICATION

## Authentication

### Structure of Server Project

```
|
api
| |- - account.api.js
| |- - index.js
|
node modules
|
schemas
| |- - - account.schemas.js
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
"username": "acc1",
"password": "123",
"fullName": "Account 1"
},

/_ 2 _/

{
"\_id": ObjectId("some junk number"),
"username": "acc",
"password": "123",
"fullName": "Account 2"
},

/_ 3 _/

{
"\_id": ObjectId("some junk number"),
"username": "acc3",
"password": "123",
"fullName": "Account 3"
},


/_ 4 _/
{
"\_id": ObjectId("some junk number"),
"username": "acc4",
"password": "123",
"fullName": "Account 4"
},

/_ 5 _/

{
"\_id": ObjectId("some junk number"),
"username": "acc5",
"password": "123",
"fullName": "Account 5"
},
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
2.  Create a **account.schema.js** file into **schemas**
3.  Declare schema for **account** collection as below:

```
var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    fullName: String,

  },
  {
    versionKey: false
  }
);

//                              name will be used Account, AccountSchema is exported, account is the file                                                                                       name
module.exports = mongoose.model('Account', AccountSchema, 'account');
```

## Create a REST API

1. Create a new folder named **api** inside the **server** project.
2. Create a **account.api.js** file inside **api** folder contains Rest APIs login with username and password from client

```
var mongoose = require('mongoose');
var Product = require('../schemas/account.schema');

var AccountAPI = {
  login: function(request, response){

    Account.find()
           .where('username').equals(request.body.username)
           .where('password').equals(request.body.password)
           .count(function(error, numRows){
             response.status(200).json({
                count: numRows;
             });
          });
  }
};

module.exports = AccountAPI;
```

## Create Rest API ROUTING

1.  Inside the **api** folder creates a new file named **index.js**
2.  This file will hold all the routes needed for this rest api in server.

```
var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/learn_angular_5');

var AccountAPI = require('./account.api');

router.post('/account/login', AccounttAPI.login);

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

### Create a **Service** Account Service

1.  Create new folder named **services** in `src/app`.
2.  In this folder, create a new file, named `account.service.ts`

```
import { Injectable } from '@angular/core';
import { Http, Response,  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';

@Injectable()

export class AccountService {

  private BASE_URL: string = 'http://localhost.9090/api/account';
  private logedIn = false;
  constructor (  private http: Http ){

  }

  login(username: string, password: string): Observable<any>{
    return this.http
                    .post(
                          this.BASE_URL+'login',
                          {
                            username: username,
                            password: password
                          })
                    .map((res: Response)=>{

                          var result = res.json();
                          this.logedIn = result.count==1;
                          return {
                                  status: res.status, data: result
                                 };
                          })
                    .catch((error: any)=>{
                          return Observable throw(new Error(erroe, status))
                    });

  }

  logout(): void {
    this.loggedIn=false;
  }
  isLoggedOut(): boolean{
    return this.loggedIn;
  }

}
```

### DataBoard guard Service

`src/app/services`

`dashboardguard.service.ts`

```
import { Injectable } from '@agular/core';
import { CanActivate, ActivateRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountService } from './account.service';

@Injectable()
export class DashBoardGuard implements CanActivate {

  constructor (
    private accountService: AccountService,
    private router: Router
  ) { }

  canActivate (){
    if(this.accountService.isLoggedIn()){
      return true;
    }
    this.router.navigate('/login');
    return false;
  }



}
```

### Create A Children Component

1. Create new Folder `components` in `src/app` .

#### Home Component

`src/app/components/home`

`home.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'imdex.component.html'
})

export class HomeComponet implements OnInit{

  ngOnInit(){

  }
}
```

##### Home VIEW

`index.component.html`

<h3> Home page </h3>

#### Login Component

`src/app/components/login`

`login.component.ts`

```
import { Component, OnInit } from 'angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component ({
  templateUrl: 'index.component.html'
})

loginForm: FormGroup;
errorMsg: string = '';

constructor(
  private formBuilder: FormBuilder,
  private accountService: AccountService,
  private router: Router
){ }


ngOnInit(){
  this.loginForm = this.formBuilder.group({
    username:'',
    password:''
  });
}


login(): void {
  this.accountService.login(this.loginForm.value.username,
                            this.loginForm.value.password
                            ).subscribe(
                              res=>{
                                if(res.data.count==1) {
                                  this.errorMsg='';

                                  localStorage.setItem('auth_token',this.loginForm.value.username);
                                  this.router.navigate(['/dashboard']);

                                }
                                else {
                                  this.errorMsg = 'Invalid Account';

                                }
                              },
                              error=>{
                                this.errorMsg = error.message;
                              }
                            );
}

}
```

2. Create a `index.component.html` contains html form login page

`index.component.html`

```
<h3> Login page </h3>

<form [formGroup]="loginForm" (ngSubmit)="login()">

{{errorMsg}}

<table>

      <tr>

      <td>Username</td>

      <td> input type="text" formControlName="username">
      </td>
      </tr>

<tr>

<td>Password</td>

<td> input type="password" formControlName="password">
</td>
</tr>

<tr>

<td>&nbsp</td>

<td> input type="submit" value="Login">
</td>
</tr>



</table>


</form>
```

### Logout Component

`src/app/components/logout`

`logout.component.ts`

```
import { Component, OnInit } from '@angular/core';
import { ROuter } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  templateUrl: 'index.component.html'
})

export class LogoutComponent implements OnInit{

  constructor (
    private accountService: AccountService,
    private router: Router
  ){}
  ngOnInit(){
    localStorage.removeItem('auth_token');
    this.accpuntService.logout();
    this.router.navigate(['/login']);

  }




}
```

##### Logout view

`index.xomponent.html`

```
<h3> Logout Page </h3>
```

### DashBoard Component

`src/app/components/dashboard`

`dashboard.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'index.component.html'
})

export class LogoutComponent implements OnInit{

  ngOnInit(){
  }




}
```

##### Dasboard view

`index.component.html`

```
<h3> welcome to DashBoard Page </h3>
```

### Define Routing

`src/app`

`app.routing.ts`

```
import { Routes, RouterModule } from '@angular/router';

import { DashBoardComponent } from './components/dasboard/dashboard.componet';
import { HomeComponent } from './components/home/home.componet';
import { LoginComponent } from './components/login/login.componet';
import { LogoutComponent } from './components/logout/logout.componet';

import { DashBoardGuard } from './services/dashboardguard.services';

const routes = Router= [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashBoardComponent, canActivate: [DashboardGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '' },

];

export class routing = RouterModule.forRoot(routes);
```

### Create a MAIN COmponent

`src/app`

`app.compoent.ts`

```
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  ngOnInit (){

  }
}
```

### Create View

`app.component.html`

```
<a [routerLink]="['/']"> Home</a> |
<a [routerLink]="['/login']"> Login </a> |
<a [routerLink]="['/logout']"> Logout </a> |
<a [routerLink]="['/dashboard']"> DashBoard</a>

<br><br>

<router-module></router-module>
```

### Add Component and Services to Module

`app.module.ts`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/login/login.component';
import { LoginComponent } from './components/logout/logout.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';

import { DashboardGuard } from './services/dasboardguard.service';
import { AccountService } from './services/account.service';

import { routing } from './app.routing;

@NgModule ({
declarations: [
AppComponent,
HomeComponent,
LoginComponent,
LogputComponent,
DashboardCOmponet
],

import: [
BrowserModule,
FormsModule,
ReactiveFormsModule,
HttpModule,
routing
],

providers: [
AccountService,
DashboardGuard
],

bootstrap: [AppComponent]

})

export class AppModule { }
```
### Run the Application

`ng s -o`
