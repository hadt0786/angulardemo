## Click event in Angular

#### Create a Component

1. -- `src/app/click-event-in-angular` using cli `ng g c click-event-in-angular`
   - `src/app/pass-objects-list-from-component-to-view/ClickEventInAgularComponent.ts`

In this component , contains **method bind** with **click** event form

```
  import { Component, OnInit } from '@angular/cli';

  @Component ({
    selector: 'app-click-event-in-angular',
    templateUrl: './../click-event-in-angular/click-event-in-angular.component.html'
  })

  export class ClickEventInAngular implements OnInit{

    result:string='';

    ngOnInit(){

    }

    clickMe():void {
      this.result="Hello world";
    }

  }
```
## Create View

1.   -- `src/app/pass-objects-list-from-component-to-view/ClickEventInAgularComponent.html`
   
   ```
   <form>
   <input type="button" value="ClickMe()"(click)="clickMe()">
  <br>
  {{result}}
   </form>

   ```
## Add Component to Module

1. In `app.module.ts` Add new component to module

   ```

  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { ClickEventInAngular } from './../click-event-in-angular';

  @NgModule({
    declaration:[ClickEventInAngular],
    
    imports: [BrowserModule],

    providers: [],

    bootstrap: [AppComponent]
  })

   ``` 

#### Add selector tag to app.module.html

1.  `src/app/pass-object-from-component-to-view` copy selector tag 'app-pass-object-from-component-to-view'

2.  paste this tag in `src/app/app.component.html <app-pass-object-from-component-to-view></app-pass-object-from-component-to-view>`

#### Run the application

1. `ng serve --open`
