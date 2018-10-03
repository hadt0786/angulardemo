import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

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

        ],
      ],



      email:
      [
        '',
       [ Validators.required,
        Validators.pattern(/\w+([-+.]\w+)*@w+([-,]\w+)*/)
      ]
    ],

      website:
      [
        '',
        [Validators.pattern(
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/)
        ]
      ]
      }
      );

  }
  save (): void {
    console.log('Account Info');
    console.log('Username : ' + this.registerForm.value.username);
    console.log('Password : ' + this.registerForm.value.password);
    console.log('Email    : ' + this.registerForm.value.email);
    console.log('Website  : ' + this.registerForm.value.website);

}
}
