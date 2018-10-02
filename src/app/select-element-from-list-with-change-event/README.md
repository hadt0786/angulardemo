## Select event from list with Change event in Angular

#### Install angular 

`npm install -g @angular/cli`


#### Create an Entity

1.  Create a New Folder `src/app/entities` create a file name `src/app/entities/category.entity.ts`
    Cli - `ng g class src/app/entities/category`

```
export class Category {
  id: string;
  name:string;
}
```

#### Create a Component

1. -- `src/app/select-element-from-list-with-change-event` using cli `ng g c select-element-from-list-with-change-event`
   - `src/app/select-element-from-list-with-change-event/SelectElementfromListWithChangeEventComponent.ts`

```
import { Component, onInit } from '@angular/core';
import { Category } from './../entities/category.entity';

@Component ({
  selector: 'app-select-element-from-list-with-change-event',
  templateUrl: './src/app/select-element-from-list-with-change-event'
})

export class SelectEventFromListWithCHangeEvent{
  result:string='';
  categories: Category[];

  ngOnInt(){
    this.categories=[
      {
        id:'c1', name:'category1'
      },
      {
        id:'c2', name:'category2'
      },
      {
        id:'c3', name:'category3'
      },
      {
        id:'c4', name:'category4'
      },
      
    ];
  }
  display(event:any ): void {
    this.result='Category Id is selected : '+event.target.value;
  }

}

```

## Create View

1.   -- `src/app/select-element-from-list-with-change-event/SelectElementFromListWithChangeEventComponent.html`
   
   ```
   <form>

    <select (change)="display($event)">
    <option *ngFor="let category of categories" value={{category.id}}>{{category,name}}</option>
   
     </select>

  <br>
  <span [nnerHTML]="result"></span>

   </form>
  ```


## Add Component to Module

1. In `app.module.ts` Add new component to module

  ```
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { SelectElementFromListWithChangeEvent } from './../select-element-from-list-with-change-event';

  @NgModule({
    declaration:[SelectElementFromListWithChangeEvent],
    
    imports: [BrowserModule],

    providers: [],

    bootstrap: [AppComponent]
  })
```
#### Add selector tag to app.module.html

1.  `src/app/select-element-from-list-with-change-event` copy selector tag 'app-change-event-in-angular'

2.  paste this tag in `src/app/app.component.html <app-select-element-from-list-with-change-event></app-select-element-from-list-with-change-event>`

#### Run the application

1. `ng serve --open`

   









