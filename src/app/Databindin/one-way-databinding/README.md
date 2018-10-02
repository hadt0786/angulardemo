## One Way Data Binding IN ANGULAR

#### INSTALL ANGULAR

    `npm instal -g @angular/cli`

#### Create Component `ng g c Databindin/one-way-databinding`

`src/app/Databindin/one-way-databinding/one-way-databinding.component.ts`

1.  Create values bind **one way** with form

```
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-one-way-databindin',
  templateUrl: './src/app/Databindin/one-way-databinding/one-way-databinding.component.html'
})

export class OneWayDatabindingComponent implements OnInit{

  result:string='';

  ngOnInit(){
    this.result='Use one way Binding';
  }

}
```

#### Create a VIEW

`./src/app/Databindin/one-way-databinding/one-way-databinding.component.html`

```
<form>
<input type="text" [ngModel]="result" [ngModelOptions]="{standalone: true}">
<br>
{{result}}
</form>
```

#### Add component to `app.module.ts`

```
import { }

decalartion
```

#### Add selector tag in `app.component.html`

copy the selector tag from `one-way-databinding.ts` and paste to `app.component.html`
