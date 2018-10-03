
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

