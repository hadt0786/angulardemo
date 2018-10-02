## Forms Validation EVENT IN ANGULAR

#### INSTALL ANGULAR

    `npm instal -g @angular/cli`


#### Create Component `ng g c forms-validation`

1.  Inside `src/app/forms-validation/forms-validation.component.ts`


    ```
    import { Component, OnInit } from '@angular/core';
    import {FormBuilder, FormGroup, Validators } from '@angular/forms';



    @Component ({
      selector : 'app-forms-validation',
      templateUrl: './../forms-validation/forms-validation.component.html'
    })

    export class FormsVidationComponent Implements OnInit {

      registerForm: FormGroup;
      
      constructor (private formBuilder: FormBuilder){

      }


      ngOnInit(){
        this.registerForm = this.formBuilder.group({
          username: 
          ['', 
            [
            Validators.required, Validator.minLnegth(3),
            Validators.maxLength(10)
            ]
          ],
 
          password: 
          [
            '',
            Validators.required, 
            Validators.pattern(
              '^((?=.*[0-9])(?=.[a-z])(?=.*[@#$%]).{6,20}$')]]
              );
          ],

          email: 
          [
            '',
            Validators.required, 
            Validators.pattern(
              /\w+([-+.]\w+)*@w+([-,]\w+)*/)]]
              )
          ],

          website: 
          [
            '',
            Validators.pattern(
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/)]])
          ],
          });

      }
      save(): void{
        console.log('Account Info');
        console.log('Username : '+this.registerForm.value.username);
        console.log('Password : '+this.registerForm.value.password);
        console.log('Email    : '+this.registerForm.value.email);
        console.log('Website  : '+this.registerForm.value.website);

    }
    ```

    //starts here from creating view
    
