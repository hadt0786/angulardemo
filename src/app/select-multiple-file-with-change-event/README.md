## Select Multiple File with Change event in Angular

#### Install angular

`npm install -g @angular/cli`

#### Create a Component

1. -- `src/app/select-multiple-file-with-change-event` using cli `ng g c select-multiple-file-with-change-event`
   - `src/app/select-multiply-file-with-change-event/SelectMultipleFileWithChangeEventComponent.ts`

```
import { Component, onInit } from '@angular/core';

@Component ({
  selector: 'app-select-multiple-file-with-change-event',
  templateUrl: './src/app/select--multiple-file-with-change-event'
})

export class SelectMultipleFileWithCHangeEvent{
  result:string='';

  ngOnInt(){

    }
  display(event:any ): void {

    const selectedFile = even.target.value;
    for(let i=0;i<selectedFile.length;i++){
    this.result='File Name: '+ selectedFile.name;

    this.result+='<br>File Size(byte)  '+ selectedFile.size;

   this.result+='<br>File Type: '+ selectedFile.type;
  this.result += '<br> __________________________________';
    }
  }

}
```


## Create View

1.  -- `src/app/select-multiple-file-with-change-event/SelectMultipleFileWithChangeEventComponent.html`

```
<form>

 <input type="file" (change)="save($event)" multiple="multiple">

 <br>

 <span [innerHTML]="result"></span>

    </form>
```


## Add Component to Module

1. In `app.module.ts` Add new component to module

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SelectFileWithChangeEvent } from './../select-file-with-change-event';

@NgModule({
  declaration:[SelectElementFromListWithChangeEvent],

  imports: [BrowserModule],

  providers: [],

  bootstrap: [AppComponent]
})
```

#### Add selector tag to app.module.html

1.  `src/app/select-multiple-file-with-change-event` copy selector tag 'app-select-multiple-file-with-change-event'

2.  paste this tag in `src/app/app.component.html <app-select-multiple-file-with-change-event></app-select-multiple-file-with-change-event>`

#### Run the application

1. `ng serve --open`


