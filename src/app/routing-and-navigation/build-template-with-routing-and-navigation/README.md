# Routing and Navigation IN ANGULAR

## INSTALL ANGULAR

`npm instal -g @angular/cli`

### Create a Children Component

1.  **HOME**
    `ng g c routing-and-navigation/children/home`

    `./src/app/routing-and-navigation/children/home`

#### Home Controller

`./src/app/routing-and-navigation/children/home/home.coponent.ts`

```
import { Component, OnInit } from '@angular/core';

@Component ({
  //selector is missing
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  data1: string;

  ngOnInit(){
    this.data1 = "Hello HomePage";
  }
}
```

#### Home View

`./src/app/routing-and-navigation/children/home/home.coponent.html`

```
<h3> Home page<h3>

{{data1}}
```

2.  **About Us**
    `ng g c routing-and-navigation/children/about-us`

    `./src/app/routing-and-navigation/children/about-us`

#### About Us Controller

`./src/app/routing-and-navigation/children/about-us/about-us.coponent.ts`

```
import { Component, OnInit } from '@angular/core';

@Component ({
  //selector is missing
  templateUrl: 'about-us.component.html'
})

export class AboutUsComponent {
  data2: string;

  ngOnInit(){
    this.data2 = "Hello About us Page";
  }
}
```

#### About Us View

`./src/app/routing-and-navigation/children/about-us/about-us.coponent.html`

```
<h3>About US<h3>

{{data2}}
```

3.  **News**
    `ng g c routing-and-navigation/children/news`

    `./src/app/routing-and-navigation/children/news`

#### News Controller

`./src/app/routing-and-navigation/children/news/nes.coponent.ts`

```
import { Component, OnInit } from '@angular/core';

@Component ({
  //selector is missing
  templateUrl: 'news.component.html'
})

export class NewsComponent {
  data3: string;

  ngOnInit(){
    this.data3 = "Hello News page";
  }
}
```

#### News View

`./src/app/routing-and-navigation/children/news/news.coponent.html`

```
<h3> News page<h3>

{{data3}}
```

### Define **Routing**

1.  Create a new File, named `app.routing.ts` in `src/app/`

    Main component - build-template-with-routing-and-navigation
  


```
https://angular.io/tutorial/toh-pt5

ng generate module app-routing --flat --module=app
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.
```

#### `app.routing.ts` `build-template-with-routing-and-navigation.ts`

```
import { Router, RouterModule } from '@angular/routers';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component;
import { NewsComponent } from './component/news/news.component';

const routes: Routes =
[
  { path: ''. component: HomeComponent },
  { path: 'home'. component: HomeComponent },
  { path: 'aboutus'. component: AboutUsComponent },
  { path: 'news'. component: NewsComponent },
  { path: '**'. redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
```

### Create A **MAIN** component

1.  Create a ew file, named `app.component.ts` in `src/app`

`build-template-with-routing-and-navigation.ts`

```
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  ngOnInit(){}
}
```

### Create a **HTML** template

1. Create a new file, named `app.component.html` in `src/app`

   `app.component.html`
   `build-template-with-routing-and-navigation.html`

```
<a [routerLink]="['/home']"> Home </a> |
<a [routerLink]="['/about-us']"> ABout us</a> |
<a [routerLink]="['/news]"> News </a>
<br><br>

// remeber router outlet only worls in app.component.html
in between the tag
<a>
<router-outlet></router-outlet>
</a>

<router-outlet></router-outlet>

<br><br>

CopyRight AKASH
```

### Add **Component** and **Routing** to **Module**

1.  In `app.module.ts` path - `src/app/app.module.ts`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormModule } from '@angular/forms';

import { BuildTemplateWithRoutingAndNavigationComponent } from './src/app/routing-and-navigation/build-template-with-routing-and-navigation/build-template-with-routing-and-navigation.component.ts';

import { Home } from './src/app/routing-and-navigation/build-template-with-routing-and-navigation/children/home/home.component.ts'


import { AboutUs } from './src/app/routing-and-navigation/build-template-with-routing-and-navigation/children/about-us/about-us.component.ts'


import { News } from './src/app/routing-and-navigation/build-template-with-routing-and-navigation/children/news/news.component.ts'

import { routing } from './app.routing';

@NgModule ({
  decalrations: 
  [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NewsComponent
  ],

  imports: 
  [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],

  providers:
  [

  ],

  bootstrap:
  [
    AppComponent
  ]

})

export class AppModule { }

```


### Add a selector tag in te app.component.html

### Run The Application

`ng s -o`
