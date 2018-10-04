## Call A Service from another Service IN ANGULAR

#### INSTALL ANGULAR

`npm instal -g @angular/cli`

#### Create a **Service**

1.  **Math Service**

`ng g s services/math`

`src/app/service/math`

```
import { Injectable } from '@angular/core';

@Injectable()
export class MathService {
  multiply (a: number, b: number){
    return a*b;
  }
}
```

2.  **Calculator Service**

`ng g s services/calculator`

`src/app/services/calculator`

```
import { Injectable } from '@angular/core';
import { MathService } from './src/app/services/math.service';

@Injectable()

export class CalculatorService {

  constructor (private mathService: MathService){

  }

  square(a: number): number {
    return this.mathService.multiply(a,a);
  }

  cube(a: number): number{
    return this.mathService.multiply(a, this.mathService(a,a));
  }

}
```

#### Create A Component

`ng g c call-a-service-from-another-service`

`src/app/call-a-service-from-another-service/call-a-service-from-another-service.coponent`;

1.  In this component will call the methods in calculator service

```
import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './src/app/services/calculator';

@Component ({
  selector: 'app-call-a-service-from-another-service',
  templateUrl: '.src/app/call-a-service-from-another-service/call-a-service-from-another-service.coponent.html'
})

export class CallAServiceAnotherService implements OnInit {
result1: number;
result2: number;

constructor(private calculatorService: CalculatorService){

}

ngOnInit(){
  this.result1 = this.calculatorService.square(2);
  this.result2 = this.calculatorService.cube(3);
}


}
```

#### Create a VIEW

1.  `.src/app/call-a-service-from-another-service/call-a-service-from-another-service.component`;
   
```
Result 1: {{result1}}
<br>
Result2: {{result2}}
```

#### Add **Component** and **Service** in `src/app/app.module.ts`

```
import { BrowserModule } from '@angular/browser-platform';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MathService } from '.src/app/services/math.service';
import { CalculatorService } from '.src/app/services/calculator.service';

import { CallAServiceFromAnotherService } from './src/app/call-a-service-from-another-service/call-a-service-from-another-service.component';

@NgModule({
  declaration:[
    CallAServiceFromAnotherService
  ],

  import: [
    BrowserModule,
    FormsModule
  ],

  providers: [
    MathService,
    CalculatorService
  ],

  bootstrap: [AppCOmponent]
})

export class AppModule {}

```

#### Add a Selector tag to `app.component.html`

#### Run the application 

`ng s -o`
