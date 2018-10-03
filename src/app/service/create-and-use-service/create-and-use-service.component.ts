import { Component, OnInit } from '@angular/core';
import { MathService } from '../../services/math.service';



@Component({
  selector: 'app-create-and-use-service',
  templateUrl: './create-and-use-service.component.html',
  styleUrls: ['./create-and-use-service.component.css']
})
export class CreateAndUseServiceComponent implements OnInit {

  result1: number;
  result2: number;
  result3: number;

  constructor(private mathService: MathService) { }

  ngOnInit() {

    this.result1 = this.mathService.addition(10, 2);
    this.result2 = this.mathService.subraction(10, 2);
    this.result3 = this.mathService.multiplication(10, 2);

  }

}
