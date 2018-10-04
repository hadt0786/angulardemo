import { Component, OnInit } from '@angular/core';

// definind routing imports

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../children/home/home.component';
import { NewsComponent } from '../children/news/news.component';
import { AboutUsComponent } from './../children/about-us/about-us.component';

@Component({
  selector: 'app-build-template-with-routing-and-navigation',
  templateUrl: './build-template-with-routing-and-navigation.component.html',
  styleUrls: ['./build-template-with-routing-and-navigation.component.css']
})




export class BuildTemplateWithRoutingAndNavigationComponent implements OnInit {


 // Error -  A class member cannot have the 'const' keyword.
  // const routes: Routes = [
  //   { path: '', children: HomeComponent },
  //   { path: 'home', children: HomeComponent },
  //   { path: 'about-us', children: AboutUsComponent },
  //   { path: 'news', children: NewsComponent },
  //   { path: '**', redirectTo: '' }
  // ];

  // Solution
  // Declare outside the class
  // then declare in ts

  // 2nd Solution
  // make a new file app.routing.ts
  // and define overthere
  // we follow the second solution

//  route = routes;

  constructor() {}

  ngOnInit() {}
}

// const routes: Routes = [
//   { path: '', children: HomeComponent },
//   { path: 'home', children: HomeComponent },
//   { path: 'about-us', children: AboutUsComponent },
//   { path: 'news', children: NewsComponent },
//   { path: '**', redirectTo: '' }
// ];


// export const routing = RouterModule.forRoot(routes);
