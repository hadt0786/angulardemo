# Nested Routes With Routing and Navingation

## Create new Component

### Aboutus Component

`ng g c routing-and-navigation/nested-routes-with-routing-and-navigation/components/aboutus`

#### Nested Aboutus component

##### Menu 1 Component

`ng g c routing-and-navigation/nested-routes-with-routing-and-navigation/components/aboutus/components/menu1`

##### Menu 2 Component

`ng g c routing-and-navigation/nested-routes-with-routing-and-navigation/components/aboutus/components/menu1`

#### HOME component

`ng g c routing-and-navigation/nested-routes-with-routing-and-navigation/components/home`

#### NEWS COmponent

`ng g c routing-and-navigation/nested-routes-with-routing-and-navigation/components/news`

## Home Component

### Home component controller

`./src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/home/home.component.ts`

`home.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  data1: string;

  ngOnInit(){
    this.data1 = 'Hello Home Page';
  }
}
```

### Home VIEW

`./src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/home/home.component.html`

`home.component.html`

```
<h3> Home Page <h3>

{{data1}}
```

## Aboutus Component

### AboutUS component controller

`./src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus/aboutus.component.ts`

`aboutus.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'about.component.html'
})

export class AboutusComponent implements OnInit {


  ngOnInit(){

  }
}
```

### Aboutus VIEW

`./src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus/aboutus.component.html`

`aboutus.component.html`

```
<h3> About Us Page <h3>

<a [routerLink]="['/aboutus/about-us-menu-1']"> |
<a [routerLink]="['/aboutus/about-us-menu-2']">

<router-outlet></router-outlet>
```

#### Menu 1 Component

##### Menu 1 controller

`./src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus/components/menu1/menu1.component.ts`

`menu1.aboutus.component.ts`

```
import { Component, OnInit } '@angulare/core';

@Component ({
  templateUrl: 'menu1.aboutus.component.html'
})

export class Menu1AboutUsComponent {

  ngOnInit(){

  }
}
```

##### Menu 1 View

`menu1/aboutus.component.html`

```
<h4> Menu 1 is selected </h4>
```

#### Menu 2 Component

##### Menu 2 Controller

`./src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus/components/menu2/menu2.component.ts`

`menu2.aboutus.component.ts`

```
import { Component, OnInit } '@angular/core';

@Component({
templateUrl: 'menu2.aboutus.component.html'
})

export class Menu2AboutUsComponent implements OnInit {

ngOnInit(){

}

}
```

##### Menu 2 VIEW

`./src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus/components/menu2/menu2.component.html`

`menu2.aboutus.component.html`

```
<h4> Menu 2 is selected </h4>
```

## News Component

`./src/app/routing-and-navigation/news/news.component.ts`

### News Controller

`news.component.ts`

```
import { COmponent, OnInit } from '@angular/core';

@Component ({
  templateUrl: 'news.component.html'
})

export class NewsComponent implements OnInit {

  data3: string;

  ngOnInit(){
    this.data3 = "Hello News Component";
  }
}
```

### News VIEW

`./src/app/routing-and-navigation/news/news.component.html`

`news.component.html`

```
<h3> News Page </h3>

{{data3}}
```

# Define Routing

1. Create new File `app.routing.ts` in `src/app`

```
// Importing routes and routing module

import { Routes, RouterModule } from '@angular/router';

// importing the routing component

import { HomeCoponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/home.component';

import { AboutusComponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus.component';

import { Menu1AboutusComponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus/components/menu1.component';

import { Menu2AboutusComponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus/components/menu2.component';

import { NewsComponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/news.component'


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent ,

                    children: [
                        { path: '', redirectTo: 'home', pathMath: 'full' },
                        { path: 'aboutus-menu1', component: Menu1Componet },
                        { path: 'aboutus-menu2', component: Menu2Componet },
                    ]
  },

  { path: 'news', component: NewsComponet },
  { path: '**', redirectTo: '' },

];

export const routing = RouterModule.forRoot(routes);
```

## Create a **MAIN** component

### MAIN Controller

`src/app`
`app.component.ts`

```
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implement OnInit {
  ngOnInit(){

  }
}
```

### Create a HTML Template

`src/app`
`app.component.html`

```
<a [roterLink]='[/home]'> Home </a> |
<a [roterLink]='[/aboutus]'> About Us </a> |
<a [roterLink]='[/news]'> News </a>

<br><br>

<router-outlet></router-outlet>

<br><br>

Copyright AKASH
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

import { AboutusComponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus.component';

import { Menu1AboutusComponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus/components/menu1.component';

import { Menu2AboutusComponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/aboutus/components/menu2.component';

import { NewsComponent } from './src/app/routing-and-navigation/nested-routes-with-routes-and-navigation/components/news.component'

@NgModule ({

declarations: [
  AppComponent,
  HomeComponent,
  AboutusComponent,
  Menu1AboutusComponent,
  Menu2AboutusComponent,
  NewsComponent
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
