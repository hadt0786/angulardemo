import { CalculatorService } from './../services/calculator.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-call-a-service-from-another-service',
  templateUrl: './call-a-service-from-another-service.component.html',
  styleUrls: ['./call-a-service-from-another-service.component.css']
})
export class CallAServiceFromAnotherServiceComponent implements OnInit {

  result1: number;
  result2: number;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.result1 = this.calculatorService.square(2);
    this.result2 = this.calculatorService.cube(3);
  }

}
