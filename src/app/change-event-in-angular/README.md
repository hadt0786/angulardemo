## Change event in Angular

#### Install angular 

`npm install -g @angular/cli`

#### Create a Component

1. -- `src/app/change-event-in-angular` using cli `ng g c change-event-in-angular`
   - `src/app/change-event-in-angular/ChangeEventInAgularComponent.ts`

In this component , contains **method bind** with **change** event form

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

    display(event: any):void {
      this.result = 'Category Id is selected..'+event.target.value;
    }

  }
```

## Create View

1.   -- `src/app/change-event-in-angular/ChangeEventInAgularComponent.html`
   
   ```
   <form>

    <select (change)="display($event)">
    <option value="c1">category 1</option>
    <option value="c2">category 2</option>
    <option value="c3">category 3</option>
    <option value="c4">category 4</option>
  </select>

  <br> {{result}}

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

1.  `src/app/change-event-in-angular` copy selector tag 'app-change-event-in-angular'

2.  paste this tag in `src/app/app.component.html <app-change-event-in-angular></app-change-event-in-angular>`

#### Run the application

1. `ng serve --open`

   





