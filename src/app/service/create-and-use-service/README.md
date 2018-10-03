## Create and Use Service IN ANGULAR

#### INSTALL ANGULAR

  `npm instal -g @angular/cli`

#### Create a Service using `ng g s services/math`

1.  New Folder `Services` in `src/app/services`

2.  Create a Math operators as follows :

```
import { Injectable } from '@angular/core';

@Injectable()
export class MathService{

  addition(a: number, b: number){
    return a+b;
  }
  subraction(a: number, b: number){
    return a-b;
  }
  multiplication(a: number, b: number){
    return a*b;
  }

}
```

#### Create a Component `ng g c service/create-and-use`

1.  In this component we call the services that we create in `src/app/services/math.service.ts`

2.  Component - `src/app/service/create-and-use.component.ts`

```
import { Component, OnInit } from '@angular/core';

import { MathService } from './src/app/services/math.service';

@Component ({
  selector : 'app-create-and-uses-service',
  templateUrl : './src/app/service/create-and-use-service.component.html'
})

export class CreateAndUseServiceComponent implements OnInit {

  result1: number;
  result2: number;
  result3: number;

  constructor (private mathService: MathService){ }
}

ngOnInit(){
  this.result1 = this.mathService.addition(10,2);
  this.result2 = this.mathService.subraction(10,2);
  this.result3 = this.mathService.multiplication(10,2);

}
```

#### Create a VIEW

1.  In the `./src/app/service/create-and-use-service.component.html`

```
  Result 1 : {{result1}}
<br>
   Result 2 : {{result2}}
<br>
   Result 3 : {{result3}}
<br>
```

#### Add Component and Service to Module

1.  **Add Component** in `app.module.ts`
   
  ```
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';

  import { MathService } from './src/app/services/math.service';

  import { CreateAndUseService } from './src/app/service/create-and-use-service.component.ts';

  @NgModule ({
    declaration: [
      CreateAndUseService
    ],

    imports: [
      BrowserModule,
      FormsModule
    ],

    providers: [
      MathService
    ],

    bootstrap:[
      AppComponent
    ]
  

  })

  export class AppModule { }

```
#### Run the Application

`ng  s -o`
