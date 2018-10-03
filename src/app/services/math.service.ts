import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  addition(a: number, b: number) {
    return a + b;
  }
  subraction(a: number, b: number) {
    return a - b;
  }
  multiplication(a: number, b: number) {
    return a * b;
  }

}
