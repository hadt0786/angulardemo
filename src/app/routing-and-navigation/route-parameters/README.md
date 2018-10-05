# Route Parameters With Routing and navigation

## Install angular

`npm install -g @angular/cli`

## Structure

|

- src
  | |
- - - app(Main)
      | | |
- - - - - components (children)
          |
          |
          |
          |
          |
          |
          |
          |

## Create A Children Component

1.  Create a New Folder `componnets` n `src/app`

### Home Component

### MoreParameters Component

### One Parameter

### Home Component

`./src/app/routing-and-navigation/route-parameters/components/home.component`

#### Home Contorller

`home.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl:
})

export class HomeComponent implements OnInit {
  ngOnInit(){

  }
}
```

#### Home View

`home.component.html`

```
<h3> Use Routes parameter</h3>
```

### One parameter Component

`./src/app/routing-and-navigation/route-parameters/components/oneparameter`

#### OneParameter Contoller

`oneparameter.component.ts`

```
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component ({
  templateUrl: 'oneparameter.component.html'
})

export class OneparameterComponent implements OnInit {

  id: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this.id = this.actiavtedRoute.snapshot.params.id;
  }

}
```

### Create a Oneparameter HTMl

`oneprameter.component.html`

```
<h3> Use One parameter </h3>

ID : {{id}}
```

### More parameter Component

`./src/app/routing-and-navigation/route-parameters/components/moreparameter`

#### More Parameter Contoller

`moreparameter.component.ts`

```
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component ({
  templateUrl: 'oneparameter.component.html'
})

export class OneparameterComponent implements OnInit {

  id: string;
  id2: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this.actiavtedRoute.paramMap.subscribe(params=>{

      this.id = params.get('id);
      this.id2 = parseInt(params.get(id2'));
    });

  }

}
```

### Create a More parameter HTMl

`moreprameter.component.html`

```
<h3> Use More parameters </h3>

ID : {{id}}

<br>
Id: {{id2}}
```

## Define ROUTING

`app.routing.ts` in `src/app`

```
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './src/app/routing-and-navigation/route-parameters/components/home/home.component';

import { OneparameterComponent } from './src/app/routing-and-navigation/route-parameters/components/oneparameter/oneparamet.component';


import { MoreParametersComponent } from './src/app/routing-and-navigation/route-parameters/components/moreparameters/moreparameters.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'oneparmeter', component: OneparameterComponent },
  { path: 'moreparameters', component: MoreParametersComponent },
  { path: '**', redirectTo: '' },

];

export const routing = RouterModule.forRoot(routes);
```
## Create A MAIN component

`app.component.ts` in `src/app`

### MAIN CONTROLLER

`app.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  ngOnInit(){

  }
}

```

### MAIN HTML

`app.component.html` in `src/app`

```
<a [routerLink]="['/home']">Home</a> |
<a [routerLink]="['/one-parameter', '{id:'p01'}']">One parameter</a> |
<a [routerLink]="['/moreparameter', '{id:'p01',id:'p02'}']">More Parameter</a> 
```

## Add Component and Routing to Module

`app.module.ts`
`src/app`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { HomeCoponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/home.component';

import { OneparameterCoponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/home.component';

import { MoreparametersCoponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/home.component';


@NgModule ({

declarations: [
  AppComponent,
  HomeComponent,
  OneParameterComponent,
  MoreparametersComponent,

],

imports: [
  BrowserModule,
  ReactoveFormsModule,
  FormsModule,
  routing

],

providers: [

],

bootstrap:[AppComponent]


})

export class AppModule { }
```

## Include the selector tag in the `app.component.html`

## Run The Application

`ng s -o`
