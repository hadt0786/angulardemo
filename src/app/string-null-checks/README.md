# String Null Check in Angular

## Install in Angular

`npm install -g @amgular/cli`

## Create Component

`ng g c string-null-check`

`./src/app/string-null-checks/string-null-checks.component`

`string-null-checks.component.ts`

```
imports { COmponent, OnInit } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{

  canBeNull1: string | null;
  canbeNull2: string | null;

  canBeUndefined1: Number | undefined;
  canBeUndefined2: Number | undefined;

  canBeNullOrUndefined1: String | null | undefined;
  canBeNullOrUndefined2: String | null | undefined;
  canBeNullOrUndefined3: String | null | undefined;

  ngOnInit(){
    this.canBeNull1: 'Hello';
    this.canbeNull2:  null;

  this.canBeUndefined1: 123;
  this.canBeUndefined2: undefined;

  this.canBeNullOrUndefined1: 'Hi';
  this.canBeNullOrUndefined2:  null ;
  this.canBeNullOrUndefined3: undefined;
  }
}
```

## Create VIEW

`app.component.html` in `src/app`

```
<h3> Use can be NULL or String </h3>

canBeNull1 variable with string value: {{canBeNull}}
<br>
canBeNull2 variable with null value: {{canBeNull2==null ? 'null': ''}}

<br>

<h3> Use can be Undefined or Number </h3>

canBeUndefined1 variable with number value: {{canBeUndefined1}}
<br>
canBeUndefined2 variable with undefined value: {{canBeUndefined2==undefined ? 'undefined': ''}}

<h3> Use can be Null or Undefined or String </h3>

canBeNullOrUndefined1 variable with String value: {{canBeNullOrUndefined1}}
<br>
canBeNullOrUndefined2 variable with null value: {{canBeNullOrUndefined2==null ? 'null': ''}}

<br>
canBeNullOrUndefined3 variable with number value: {{canBeNullOrUndefined3==undefined ? 'undefined': ''}}
```

### Add Component to Module

`app.module.ts` in `src/app`
