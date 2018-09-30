##  PASS VALUES FROM COMPONENT TO VIEW

1 :  ** Create Component ** 
        -- CLI -  `ng g c pass-value-from-component-to-view`
        -- Create values to pass them
            src/app/pass-value-from-component-to-view.ts
            
  export class PassValuesFromComponentToViewComponent implements OnInit {

  age:number;
  fullName:string;
  status : boolean;
  eamil:any;


  constructor() { }

  ngOnInit() {
    this.age = 20;
    this.fullname = 'AKASH';
    this.status = truw;
    this.email = 'akash@gmail.com';
  }

}

2 : ** Create View **
      --  src/app/pass-value-from-component-to-view.html

          Age :{{age}}
          <br> Full name :{{fullName}}
          <br> status :{{status}}
          <br> Email : {{email}}


3 : **Add a new compinetn to **Module****

    -- `src/app/app.module.ts`

      - 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassValuesFromComponentToViewComponent } from './pass-values-from-component-to-view/pass-values-from-component-to-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PassValuesFromComponentToViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

##Incluse the Selector tag into the root html

4 :  `src/app/app/component.html`

<app-pass-values-from-component-to-view></app-pass-values-from-component-to-view>

## Run the app

5 : command line make sure you inside the angular project

    `ng serve --open` or `ng s -o`

    









