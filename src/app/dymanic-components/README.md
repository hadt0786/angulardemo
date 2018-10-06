# Dynamic Componets in Angular

## Install Angular

`npm install -g@angular/cli`

## Structure of project

### dynamic-componet is parent

#### goodbye , hello, hi are children

## Create Children Component

`component` in `src/app`

### Hi Component

`./src/app/dymanic-components/hi`

#### Hi controller

`hi.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './hi.component.html'
})

export class HiComponent implements OnInit {

  ngOnInit(){

  }
}
```

#### Hi Html

`hi.component.html`

```
<h3> Hi Component </h3>
```

### Hello Component

`./src/app/dymanic-components/hi/hello.component`

#### Hello controller

`hello.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './hi.component.html'
})

export class HelloComponent implements OnInit {

  ngOnInit(){

  }
}
```

#### Hello Html

`hi=ello.component.html`

```
<h3> Hello Component </h3>
```

### GoodBye Component

`./src/app/dymanic-components/goodbye/goodbye.component`

#### GoodBye controller

`goodbye.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './goodbye.component.html'
})

export class GoodByeComponent implements OnInit {

  ngOnInit(){

  }
}
```

#### GoodBye Html

`goodbye.component.html`

```
<h3> Good Bye Component </h3>
```

## Create a MAIN COMPONENT

`app.component.ts` in `src/app`

```
import { Component, OnInit } from '@angular/core';

import { HelloComponent } from './src/app/dymanic-components/hello/hello.component'
import { HiComponent } from './src/app/dymanic-components/hi/hi.component'
import { GoodbyeComponent } from './src/app/dymanic-components/goodbye/goodbye.component'

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  say: any;

  ngOnInit(){
    this.say = HiComponent;
  }

  sayHi(){
    this.say = HiComponent;
  }

  sayHello(){
    this.say = HelloComponent;
  }

  sayGoodBye(){
    this.say = GoodbyeComponent;
  }
}
```

#### Create a VIEW

`app.component.html` in `src/app`

```
<h1> Dynamic component </h1>

<ng-container *ngComponentOutlet = "say"></ng-container>

<button (click)="sayHi()"> Say Hi </button>
<button (click)="sayHello()"> Say Hello </button>
<button (click)="sayGoodBye()"> Say GoodBye </button>
```

## Add Component to Module

`app.module.ts` in `src/app`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HiComponent } from './components/hi/hi.component';
import { HelloComponent } from './components/hello/hello.component';
import { GoodByeComponent } from './components/goodbye/goodbye.component';

@NgModule({
declarations;[
  AppComponet,
  HiComponent,
  HelloComponent,
  GoodByeComponent
],

entryComponents : [
  HiComponent,
  HelloComponent,
  GoodByeComponent
],

imports:[
  BrowserModule
],
providers:[

],

bootstrao:[
  AppComponent
]

})

export class AppModule { }
```

## Run Application

`ng s -o`
