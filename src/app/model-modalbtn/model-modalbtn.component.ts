import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svg:g[modalbtn]',
  templateUrl: './model-modalbtn.component.html',
  styleUrls: ['./model-modalbtn.component.css']
})
export class ModelModalbtnComponent implements OnInit {

  getColor(id) {
    switch (id) {
      case 1:
        return '10';
      case 2:
        return '10';
      case 3:
        return '10';
      case 4:
        return '5';
    }
  }

  // tslint:disable-next-line:member-ordering
  svgtest = [
    {
      id: 1,
      stroke: '#1D1D1D',
      fill: '#fff',
      strokew: 1,
      x: 4.5,
      y: 52.5,
      width: 59,
      height: 33,
      rx: 6,
      text: 'This is a function',
      fontsize: '6px'
    },
    {
      id: 2,
      stroke: '#1D1D1D',
      fill: '#fff',
      strokew: 1,
      x: 4.5,
      y: 102.5,
      width: 59,
      height: 33,
      rx: 6,
      text: 'First Function',
      fontsize: '6px'
    },
    {
      id: 3,
      stroke: '#1D1D1D',
      fill: '#fff',
      strokew: 1,
      x: 3.5,
      y: 153.5,
      width: 63,
      height: 35,
      rx: 6,
      text: 'Second Function',
      fontsize: '6px'
    },
    {
      id: 4,
      stroke: '#1D1D1D',
      fill: '#fff',
      strokew: 1,
      x: 79.5,
      y: 151.5,
      width: 37,
      height: 14,
      rx: 0,
      text: 'Third Function',
      fontsize: '6px'
    },
  ];



  constructor() { }

  ngOnInit() {
  }

}
