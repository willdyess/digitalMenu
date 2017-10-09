import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashmodels = [
    {
      name: 'test',
      route: 'process',
      img: 'primarycare'
    },
    {
      name: 'test',
      route: 'test',
      img: 'primarycare'
    },
    {
      name: 'test',
      route: 'route',
      img: 'primarycare'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
