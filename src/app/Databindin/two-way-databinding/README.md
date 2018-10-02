## Two Way Data Binding IN ANGULAR

#### INSTALL ANGULAR

    `npm instal -g @angular/cli`

#### Create Component `ng g c Databindin/two-way-databinding`

`src/app/Databindin/two-way-databinding/two-way-databinding.component.ts`

1.  Create values bind **two way** with form

```
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-two-way-databindin',
  templateUrl: './src/app/Databindin/two-way-databinding/two-way-databinding.component.html'
})

export class TwoWayDatabindingComponent implements OnInit{

  result:string='';

  ngOnInit(){
    this.result='Use Two way Binding';
  }

}
```

#### Create a VIEW

`./src/app/Databindin/two-way-databinding/two-way-databinding.component.html`

```
<form>
<input type="text" [(ngModel)]="result" [ngModelOptions]="{standalone: true}">
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

copy the selector tag from `tow-way-databinding.ts` and paste to `app.component.html`
