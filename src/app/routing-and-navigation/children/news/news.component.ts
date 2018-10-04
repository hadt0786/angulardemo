import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  data3: string;

  constructor() { }

  ngOnInit() {

    this.data3 = 'Hello news page';
    // this.data3 = '<p> Test</p>';
  }

}
