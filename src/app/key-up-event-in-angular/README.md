## KEY UP EVENT IN ANGULAR

#### INSTALL ANGULAR

    `npm instal -g @angular/cli`

#### Create Component `ng g c key-up-event-in-angular`

1.  Inside `src/app/key-up-event-in-angular/key-up-event-in-angular.ts`
    --In this cmponent, contains method bind with **keyup** event from form

    ```
    import { Component, OnInit } from '@angular/core';

    @Component ({
      selector : 'app-key-up-event-in-angular',
      templateUrl: './../key-up-event-in-angular/key-up-event-in-angular.component.html'
    })

    export class KeyUpEventInAngularComponent Implements OnInit {
      result: string='';

      ngOnInit(){

      }

      display(event: any):void {
        this.result="hello"+ event.target.value;
      }
    }
    ```

#### Create a VIEW

1.  In `src/app/key-up-event-in-angular/key-up-event-in-angular.html`
    --html codes

```<form>
<input type="text" placeholder="Input your name " (keyup)="display($event)">
<br> {{result}}
</form>
```

#### Add component to Module `app.module.ts`

    ```
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { KeyUpEventInAngularComponent } from './../key-up-event-in-angular';

    @NgModule ({

    decalaration: [
    KeyUpEventInAngularComponent
    ],

    imports: [
      BrowserModule
    ],

    providers: [],
    bootstrap:[AppComponent]
    })

    export class AppModule {  }
    ```
#### Run the Application 

`ng s -o`
