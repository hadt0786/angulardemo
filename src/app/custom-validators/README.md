## Custom Form Validators IN ANGULAR

#### INSTALL ANGULAR

    `npm instal -g @angular/cli`

#### Create Custom Validators

1.  Create a new folder `validators` in `src/app` folder. In this folder create custom validators as below

2.  **MAX VALIDATORS**

    ---- in `src/app/validators` create a `max.validators.ts`
    cli - `ng g class validators`

```

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function max (value: Number): ValidatorFn {

  return (control: AbstractControl): {
    [key: string]: any} => {
      const input = control.value, isValid = input > value;
      if (isValid) {
        // tslint:disable-next-line:no-unused-expression
        return {'max' : {value } };
      } else {
        return null;
      }
    };
  }
```

3.  **MIN VALIDATOR**

Create a new file, named `min.validators.ts` in `src/app/validators`
cli - `ng g class validators`

```

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function min (value: Number): ValidatorFn {

  return (control: AbstractControl): {
    [key: string]: any} => {
      const input = control.value, isValid = input < value;
      if (isValid) {
        // tslint:disable-next-line:no-unused-expression
        return {'min' : {value } };
      } else {
        return null;
      }
    };
  }

```

#### Create Component `ng g c custom-validation`

1.  Inside `src/app/custom-validation/custom-validation.component.ts`


    ```
import { Component, OnInit } from '@angular/core';
import { max } from '../validators/max.validators';
import { min } from '../validators/min.validator';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';



@Component({
  selector: 'app-custom-validators',
  templateUrl: './custom-Validators.component.html',
  styleUrls: ['./custom-Validators.component.css']
})
export class CustomValidatorsComponent implements OnInit {

  registerForm: FormGroup;

      constructor (private formBuilder: FormBuilder){

      }


      ngOnInit() {
        this.registerForm = this.formBuilder.group({
          username:
          ['',
            [
            Validators.required, Validators.minLength(3),
            Validators.maxLength(10)
            ]
          ],

          password:
          [
            '',
            [Validators.required,
            Validators.pattern(
              '^((?=.*[0-9])(?=.[a-z])(?=.*[@#$%]).{6,20}$')
            ]
          ],

          age:
          [
            0,
            [
              min(18),
              max(120)
            ]
          ],

          email:
          [
            '',
            [
            Validators.required,
            Validators.pattern(
              /\w+([-+.]\w+)*@w+([-,]\w+)*/)
            ]
          ],

          website:
          [
            '',
            Validators.pattern(
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/)
            ],
          });

      }
      save(): void {
        console.log('Account Info');
        console.log('Username : ' + this.registerForm.value.username);
        console.log('Password : ' + this.registerForm.value.password);
        console.log('Age : ' + this.registerForm.value.age);
        console.log('Email    : ' + this.registerForm.value.email);
        console.log('Website  : ' + this.registerForm.value.website);

    }
  }
    ```

#### Creating A **View**

1.  Inside `src/app/forms-validation/forms-validation.component.html`

`[Angular] No provider for ControlContainer
[Angular] Can't bind to 'formGroup' since it isn't a known property of 'form'.

Solution
import { FormGroup, FormControl, ReactiveModule } from '@angular/forms';

    providers:[
        FormGroup,
        FormControl,
        ReactiveModule
    ]

```
<h3>Register form</h3>

<form [formGroup]="registerForm" (ngSubmit)="save()">

  <table>
  <tr>
  <td> Username</td>
  <td>
        <input type="text" formControlName="username">
  </td>
  <td>

  <div *ngIf="registrationForm.get('username').touched">
  <div *ngIf="registrationForm.hasError('required',['username'])">
    This field is required
  </div>

   <div *ngIf="registrationForm.hasError('minLength',['username'])">
    Please enter 3 character
  </div>

   <div *ngIf="registrationForm.hasError('maxLength',['username'])">
    Please enter no more than 10 characters
  </div>
  </div>

  </td>
  </tr>


  <tr>
  <td>Password</td>
  <td>
        <input type="password" formControlName="password">
  </td>
  <td>

  <div *ngIf="registrationForm.get('password').touched">
  <div *ngIf="registrationForm.hasError('required',['password'])">
    This field is required
  </div>

   <div *ngIf="registrationForm.hasError('pattern',['username'])">
  Your password does not meet the critera and complexity
  </div>

  </div>

  </td>
  </tr>


  <tr>
  <td>Age</td>
  <td>
        <input type="number" formControlName="age">
  </td>
  <td>

  <div *ngIf="registrationForm.get('age').touched">
  <div *ngIf="registrationForm.hasError('min',['age'])">
please enter a value greater than or equal to 18  </div>

   <div *ngIf="registrationForm.hasError('max',['age'])">
  Please enter a value less than or equal to 120
  </div>

  </div>

  </td>
  </tr>


  <tr>
  <td>Email</td>
  <td>
        <input type="text" formControlName="email">
  </td>
  <td>

  <div *ngIf="registrationForm.get('email').touched">
  <div *ngIf="registrationForm.hasError('required',['email'])">
    This field is required
  </div>

   <div *ngIf="registrationForm.hasError('pattern',['email'])">
  Your password does not meet the critera and complexity
  </div>

  </div>

  </td>
  </tr>

    <tr>
  <td>website</td>
  <td>
        <input type="text" formControlName="website">
  </td>
  <td>

  <div *ngIf="registrationForm.get('website').touched">

   <div *ngIf="registrationForm.hasError('pattern',['website'])">

  please enter a valid url

  </div>

  </div>

  </td>
  </tr>

    <tr>
  <td>&nbsp</td>
  <td>
        <input type="submit" value="Save" [disabled]="registrationForm.invalid">
  </td>

  </tr>



  </table>

</form>
```

#### Add Component to `app.module.ts`

```
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  import { FormsControlComponent } from './src/app/forms-control/forms-control';


  @NgModule({
    decalaration: [
      FormsControlComponent
    ],

    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ],

    provider: [

    ],

    bootstrap:[AppComponent]


  })

  export class AppModule { }
```

#### Inculde the selector tag from the component.ts to app.component.html

#### Run the Application

`ng s -o`
