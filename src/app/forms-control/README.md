## Forms COmtrol EVENT IN ANGULAR

#### INSTALL ANGULAR

    `npm instal -g @angular/cli`

#### Create an Entity

1.  `src/app/entities/account.entity.ts`

    ```
    export class Account{
      username:string;
      password:string;
      description:string;
      status:boolean;
      gender:string;
      languages:string[];
      role:string;
      certificates:string[];
    }
    ```

#### Create Component `ng g c forms-control`

1.  Inside `src/app/forms-control/forms-control.ts`


    ```
    import { Component, OnInit } from '@angular/core';
    import {FormBuilder, FormGroup } from '@angular/forms';

    import { Account } from './src/app/entities/account.entity';


    @Component ({
      selector : 'app-key-up-event-in-angular',
      templateUrl: './../key-up-event-in-angular/key-up-event-in-angular.component.html'
    })

    export class FormsControlComponent Implements OnInit {

      gender, roles, languages, certificates:any;
      registerForm: FormGroup;
      checkedList: string[];

      constructor (private formBuilder: FormBuilder){

      }


      ngOnInit(){

        this.checkedList=[];

        this.certificates=
        [
          { value:'cert1' , display:'Certficate1'},
          { value:'cert2' , display:'Certficate2'},
          { value:'cert3' , display:'Certficate3'},
          { value:'cert4' , display:'Certficate4'}

        ];

        this.genders = [
          { value:'F' , display:'Female'},
          { value:'M' , display:'Male'}
        ];

        this.roles = [
          { id:'r1' , name:'Role1'},
          { id:'r2' , name:'Role2'},
          { id:'r3' , name:'Role3'},
          { id:'r4' , name:'Role4'}
        ];


        this.languages = [
          { id:'lang1' , name:'Language 1'},
          { id:'lang2' , name:'Language 2'},
          { id:'lang3' , name:'Language 3'},
          { id:'lang4' , name:'Language 4'}
        ];


        this.registerForm = this.formBuilder.group({
          username:'',
          password:'',
          description:'',
          status: true,
          gender:this.genders[0].value,
          language:[],
          role:[],
          certificates:[]
        });

      }

      save(): void{
        let account: Account = this.registerForm.value;
        account.languages = this.checkedList;
        this.displayAccountInfoConsole(account);
      }

      displayAccountInfoConsole(account: Account){

        console.log('Username : '+account.username);
        console.log('Password : '+account.password);
        console.log('Description : '+account.description);
        console.log('Gender : '+account.gender);
        console.log('Status : '+account.status);

        console.log('Language List : ');
        for(let i =0; i<account.language.length;i++){
          console.log(account.language[i]);
        }

        console.log("Role : "+account.role);

        console.log('Certification List : ');
        for(let i =0; i<account.certificates.length;i++){
          console.log(account.certificates[i]);
        }

      }

      onCheckedboxChange(option, event){
        if(event.target.checked){
          this.checkedList.push(option.id);

        }
        else {
          for(let i =0; i<this.languages.length; i++){
            if(this.checkedList[i]==option.id){
              this.checkedList.splice(i,1);
            }
          }
        }
      }


    }
    ```

#### Creating A **View**

1.  Inside `src/app/forms-control/forms-control.html`

`[Angular] No provider for ControlContainer
[Angular] Can't bind to 'formGroup' since it isn't a known property of 'form'.

```
<h3>Register form</h3>

<form [formGroup]="registerForm" (ngSubmit)="save()">

  <table>
        <tr>
        <td>Username</td>
        <td>
        <input type="text" formControlName="username">

        </td>

        </tr>
        <tr>
        <td>Password</td>
        <td>
        <input type="password" formControlName="password">

        </td>

        </tr>

       <tr>
        <td valign="top">Description</td>
        <td>

            <textarea cols="20" rows="5" formControlName="description"></textarea>



        </td>

        </tr>

        <tr>
        <td valign="top">Gender</td>
        <td>
        <div *ngFor="let gender of genders">
          <input type="radio" formControlName="gender" value={{gender.value}}>{{gender.display}}
        </div>

        </td>

        </tr>

        <tr>
        <td valign="top">Status</td>
        <td><input type="checkbox" formControlName="status"</td>

        </tr>


        <tr>
        <td valign="top">Languages</td>
        <td>
        <div *ngFor="let language of languages">
          <input type="checkbox" formControlName="languages" value={{language.value}} (change)="onCheckedboxChange(language.$event)">{{language.display}}
        </div>

        </td>

        </tr>


        <tr>
        <td valign="top">Role</td>
        <td>

        <select formControl="role">
        <option *ngFor="let role of roles" value={{role.id}}>{{role.name}}</option>

        </select>

        </td>

        </tr>

        <tr>
        <td valign="top">Certificates</td>
        <td>

        <select formControl="certifcates" multiple="multiple">
        <option *ngFor="let certificate of certificates" value={{certificate.value}}>{{certificate.display}}</option>

        </select>

        </td>

        </tr>

        <tr>

        <td>&nbsp</td>
        <td>
          <input type="submit" value="Save">
          </td>
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
