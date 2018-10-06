# NG IF ELSE IN ANGULAR

## Install angular

`npm install -g @angular/cli`

## Create Component

`ng g c ng-if-else`

`./src/app/ng-if-else/ng-if-else.component.ts`

`ng-if-else.component.ts`

```
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/share';
import 'rxjs/add/observable/delay';

@Component({
  selector: 'app-root',
  templateUrl: './ng-if-else.component.html'
})

export class NgIfElseComponent implements OnInit{
  user: Observable<[]>;

  ngOnInit(){
    this.user = this.getUserInfoAsync().share();

  }

    getUserInfoAsync(){
      return Observable.of({

        username: 'acc1',
        fullname: 'Akash',
        age: 24,
        height: 180,
        mass: 81

      }).delay(2000);
    }

}
```

## Create A VIEW

`./src/app/ng-if-else/ng-if-else.component`

`ng-if-else.component.html`

```
<div *ngIf="user | async ;
            let user;
            else loading
">
      <h3> user info </h3>
      <table border="1">

        <tr>

          <td>UserName</td>
          <td>{{user.username}}</td>

        </tr>

        <tr>

          <td>Full namw</td>
          <td>{{user.fullName}}</td>

        </tr>

        <tr>

          <td>Age</td>
          <td>{{user.age}}</td>

        </tr>

        <tr>

          <td>Height</td>
          <td>{{user.height}}</td>

        </tr>

        <tr>

          <td>Mass</td>
          <td>{{user.mass}}</td>

        </tr>

      </table>

</div>


<ng-template #loading>

Loading user data
</ng-template >
```

## AddComponent to module

`app.module.ts`
