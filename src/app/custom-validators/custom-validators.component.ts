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

      constructor (private formBuilder: FormBuilder) {

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
