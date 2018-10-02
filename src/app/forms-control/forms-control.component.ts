import { Account } from './../entities/account.entity';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-control',
  templateUrl: './forms-control.component.html',
  styleUrls: ['./forms-control.component.css']
})
export class FormsControlComponent implements OnInit {
  genders: any;
  roles: any;
  languages: any;
  certificates: any;
  registerForm: FormGroup;
  checkedList: string[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkedList = [];

    this.certificates = [
      { value: 'cert1', display: 'Certficate1' },
      { value: 'cert2', display: 'Certficate2' },
      { value: 'cert3', display: 'Certficate3' },
      { value: 'cert4', display: 'Certficate4' }
    ];

    this.genders = [
      { value: 'F', display: 'Female' },
      { value: 'M', display: 'Male' }
    ];

    this.roles = [
      { id: 'r1', name: 'Role1' },
      { id: 'r2', name: 'Role2' },
      { id: 'r3', name: 'Role3' },
      { id: 'r4', name: 'Role4' }
    ];

    this.languages = [
      { id: 'lang1', name: 'Language 1' },
      { id: 'lang2', name: 'Language 2' },
      { id: 'lang3', name: 'Language 3' },
      { id: 'lang4', name: 'Language 4' }
    ];

    this.registerForm = this.formBuilder.group({
      username: '',
      password: '',
      description: '',
      status: true,
      genders: this.genders[0].value,
      language: [],
      role: [],
      certificates: []
    });
  }

  save(): void {
    const account: Account = this.registerForm.value;
    account.languages = this.checkedList;
    this.displayAccountInfoConsole(account);
  }

  displayAccountInfoConsole(account: Account) {
    console.log('Username : ' + account.username);
    console.log('Password : ' + account.password);
    console.log('Description : ' + account.description);
    console.log('genders : ' + account.genders);
    console.log('Status : ' + account.status);

    console.log('Language List : ');
    for (let i = 0; i < account.languages.length; i++) {
      console.log(account.languages[i]);
    }

    console.log('Role : ' + account.role);

    console.log('Certification List : ');
    for (let i = 0; i < account.certificates.length; i++) {
      console.log(account.certificates[i]);
    }
  }

  onCheckedboxChange(option, event) {
    if (event.target.checked) {
      this.checkedList.push(option.id);
    } else {
      for (let i = 0; i < this.languages.length; i++) {
        if (this.checkedList[i] === option.id) {
          this.checkedList.splice(i, 1);
        }
      }
    }
  }
}
