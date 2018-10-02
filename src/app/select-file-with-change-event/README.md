## Select File with Change event in Angular

#### Install angular

`npm install -g @angular/cli`

#### Create a Component

1. -- `src/app/select-file-with-change-event` using cli `ng g c select-file-with-change-event`
   - `src/app/select-file-with-change-event/SelectFileWithChangeEventComponent.ts`

```
import { Component, onInit } from '@angular/core';

@Component ({
  selector: 'app-select-file-with-change-event',
  templateUrl: './src/app/select-file-with-change-event'
})

export class SelectFileWithCHangeEvent{
  result:string='';

  ngOnInt(){

    }
  display(event:any ): void {
    const selectedFile = even.target.value;
    this.result='File Name: '+ selectedFile.name;

    this.result+='<br>File Size(byte)  '+ selectedFile.size;

   this.result+='<br>File Type: '+ selectedFile.type;

  }

}
```

## Create View

1.  -- `src/app/select-file-with-change-event/SelectFileWithChangeEventComponent.html`

```
<form>

 <input type="file" (chnage)="save($event)">

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

1.  `src/app/select-file-with-change-event` copy selector tag 'app-change-event-in-angular'

2.  paste this tag in `src/app/app.component.html <app-select-file-with-change-event></app-select-file-with-change-event>`

#### Run the application

1. `ng serve --open`
