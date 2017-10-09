import { Component, OnInit } from '@angular/core';
import { Md2Module } from 'md2';
import { TestModelComponent } from '../test-model/test-model.component';
import { TabComponent } from '../tab/tab.component';
import { TabsComponent } from '../tabs/tabs.component';


@Component({
  selector: 'app-b-process',
  templateUrl: './b-process.component.html',
  styleUrls: ['./b-process.component.css']
})
export class BProcessComponent implements OnInit {


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
      case 5:
        return '10';
      case 6:
        return '10';
      case 7:
        return '10';
    }
  }

  // tslint:disable-next-line:member-ordering
  model = [
    {
      id: 1,
      name: 'business process-1',
      model: 'espresso',
      modeltxt: 'espressotxt',
      createdAt: 'string',
      updatedAt: 'string',
      viewbox: '0 0 118 245',
      nodes: [
        {
          id: 11,
          name: 'Brew Milk',
          stroke: '#1D1D1D',
          fill: '#fff',
          strokew: 1,
          x: 4,
          y: 52,
          width: 60,
          height: 34,
          rx: 6,
          text: 'Brew Milk',
          linepoints: '32 36 32 49.0384048 36.0192483 45.0191565',
        },
        {
          id: 12,
          name: 'Brew Espresso',
          stroke: '#1D1D1D',
          fill: '#fff',
          strokew: 1,
          x: 4,
          y: 102,
          width: 63,
          height: 34,
          rx: 6,
          text: 'Brew Espresso',
          linepoints: '33 137 33 150.038405 37.0192483 146.019157',
        },
        {
          id: 13,
          name: 'Pour Milk Into Espress',
          stroke: '#1D1D1D',
          fill: '#fff',
          strokew: 1,
          x: 3,
          y: 153,
          width: 64,
          height: 36,
          rx: 6,
          text: 'Pour Milk Into Espresso',
          linepoints: '33 87 33 100.038405 37.0192483 96.0191565',
        },
        {
          id: 14,
          name: 'function-2',
          stroke: '#1D1D1D',
          fill: '#fff',
          strokew: 1,
          x: 79,
          y: 151,
          width: 63,
          height: 15,
          rx: 0,
          text: '',
          linepoints: '32 191 32 204.038405 36.0192483 200.019157',
        },
        {
          id: 15,
          linepoints: '67 171 74 171 74 159 81 159',
          fill: '#fff',
          stroke: '#1d1d1d'
        },
        {
          id: 16,
          polypoints: '5 208.038405 60.0363516 208.038405 65 225.038405 60.0363516 243.038405 5 243.038405 0 225.038405',
          name: 'Espresso Complete',
          fill: '#fff',
          stroke: '#1d1d1d',
          x: 0,
          y: 215.038405,
          width: 63,
          height: 15,
          text: 'testing'
        },
        {
          id: 17,
          polypoints: '5 0 60.0363516 0 65 17 60.0363516 35 5 35 0 17',
          name: 'Customer Orders Espresso',
          fill: '#fff',
          stroke: '#1d1d1d',
          x: 0,
          y: 10,
          width: 63,
          height: 15,
          text: 'testing'
        }
      ]
    },
    {
      id: 2,
      name: 'Patient Throughput',
      model: 'espresso',
      modeltxt: 'espressotxt',
      viewbox: '0 0 399 783',
      nodes: [
        {
          id: 21,
          name: 'function-4',
          stroke: '#1D1D1D',
          fill: '#fff',
          strokew: 1,
          fontsize: '6px',
          linejoin: 'round',
          linepoints: '200.509091 141 200.509091 141 200.509091 149.5 200.509091 167.34'
        },
        {
          id: 22,
          fill: '#000000',
          linepoints: '200.019091 165.5 206.559091 155 193.509091 155'
        },
        {
          id: 23,
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200.019091 165.5 206.559091 155 193.509091 155'
        },
        {
          id: 24,
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200.509091 225 200.509091 225 200.509091 233.5 200.509091 251.34'

        },
        {
          id: 25,
          fill: '#fff',
          stroke: '#000000',
          x: 150,
          y: 82,
          width: 100,
          height: 60,
          rx: 6
        },
        {
          id: 26,
          fill: '#fff',
          stroke: '#000000',
          x: 150,
          y: 166,
          width: 100,
          height: 60,
          rx: 6
        },
        {
          fill: '#fff',
          stroke: '#000000',
          x: 150,
          y: 251,
          width: 100,
          height: 60,
          rx: 6
        },
        {
          fill: '#fff',
          stroke: '#000000',
          x: 150,
          y: 647,
          width: 100,
          height: 60,
          rx: 6
        },
        {
          fill: '#fff',
          stroke: '#000000',
          x: 285,
          y: 85,
          width: 113,
          height: 54,
          rx: 2
        },
        {
          fill: '#fff',
          stroke: '#000000',
          x: 1,
          y: 172,
          width: 113,
          height: 54,
          rx: 2
        },
        {
          fill: '#fff',
          stroke: '#000000',
          x: 285,
          y: 650,
          width: 113,
          height: 54,
          rx: 2
        }, {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200.019091 249.5 206.559091 239 193.509091 239'
        },
        {
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200.019091 249.5 206.559091 239 193.509091 239'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M56,504.72 C56,509.26 59.69,512.95 64.21,512.95 L139.39,512.95 C143.93,512.95 147.62,509.56 147.62,504.72 L147.62,464.2 C147.62,459.39 144.23,456 139.39,456 L64.21,456 C59.39,456 56,459.69 56,464.2 L56,504.72 L56,504.72 Z',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M186,426.18 C186,434.1 192.24,440.33 200.18,440.33 C208.13,440.33 214.37,434.4 214.37,426.18 C214.37,417.95 208.41,412 200.18,412 C191.94,412 186,418.23 186,426.18 L186,426.18 Z',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M186.53,426 L186.53,426 L178.03,426 L108.51,426 C104.27,426 100,430.23 100,434.49 L100,455.75',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M157,503.75 C157,508.28 160.7,511.97 165.24,511.97 L240.42,511.97 C244.96,511.97 248.65,508.56 248.65,503.75 L248.65,463.23 C248.65,458.42 245.23,455 240.42,455 L165.24,455 C160.42,455 157,458.69 157,463.23 L157,503.75 L157,503.75 Z',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M261,504.74 C261,509.26 264.69,512.94 269.23,512.94 L344.41,512.94 C348.95,512.94 352.64,509.55 352.64,504.74 L352.64,464.22 C352.64,459.39 349.23,456 344.41,456 L269.23,456 C264.42,456 261,459.69 261,464.22 L261,504.74 L261,504.74 Z',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M215,426 L215,426 L223.51,426 L301.51,426 C305.77,426 310.02,430.23 310.02,434.49 L310.02,456.6',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M58.98,171.045455 L58.98,171.045455 L58.98,165.151545 L58.98,116.946298 C58.98,114.006277 71.6451176,111.045455 84.4000588,111.045455 L148.055,111.045455',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M58.98,224.970727 L58.98,224.970727 L58.98,229.986092 L58.98,275.955362 C58.98,278.465991 71.6451176,280.970727 84.4000588,280.970727 L150.6,280.970727',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M186,543.18 C186,551.1 192.24,557.33 200.17,557.33 C208.13,557.33 214.37,551.4 214.37,543.18 C214.37,534.95 208.41,529 200.17,529 C191.96,529 186,535.23 186,543.18 L186,543.18 Z',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M100,513 L100,513 L100,521.49 L100,534.83 C100,539.06 104.27,543.33 108.51,543.33 L185.11,543.33',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          // tslint:disable-next-line:max-line-length
          d: 'M307.89,513 L307.89,513 L307.89,521.5 L307.89,533.99 C307.89,538.22 303.65,542.49 299.38,542.49 L214,542.49',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'

        },
        {
          d: 'M289,86 L289,138.009614',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          d: 'M394,86 L394,138.009614',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          d: 'M292,86 L292,138.009614',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          d: 'M391,86 L391,138.009614',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          d: 'M289,651 L289,703.009614',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
         {
          d: 'M292,651 L292,703.009614',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          d: 'M391,651 L391,703.009614',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          d: 'M394,651 L394,703.009614',
          stroke: '#000000',
          fill: '#ffffff',
          linejoin: 'round'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '193 420 200.09 432.47 207.17 420'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '95 450 100.11 454.26 105.23 450'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200 440 200 440 200 447.65 200 455.3'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '195 450 200.09 454.26 205.2 450'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '304 451 309.09 455.26 314.2 451'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '193 537 200.08 549.46 207.19 537'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '180 548.21 184.24 543.11 180 538'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '203 512 203 512 203 520.23 203 528.43'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '198 523 203.12 527.23 208.23 523'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '219.24 538 215 543.11 219.24 548.19'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200 557 200 557 200 564.38 200 572.03'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '195 566 200.09 570.24 205.21 566'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200 397 200 397 200 404.35 200 412.01'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '195 406 200.09 410.26 205.21 406'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200 68 200 68 200 75.35 200 83.01'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '195 77 200.09 81.26 205.21 77'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200.019091 249.5 206.559091 239 193.509091 239'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200.019091 249.5 206.559091 239 193.509091 239'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200.509091 310 200.509091 310 200.509091 318.5 200.509091 336.34'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200.019091 334.5 206.559091 324 193.509091 324'
        },
        {
          fill: '#000000',
          stroke: '#000000',
          linejoin: 'round',
          linepoints: '200.019091 334.5 206.559091 324 193.509091 324'
        }
        // translate(255.000000, 114.250000) rotate(90.000000) translate(-255.000000, -114.250000) " 254.985 119.5 261.525 109 248.475 109
      ]
    },
    {
      id: 3,
      name: 'business process-2',
      model: 'espresso',
      modeltxt: 'espressotxt',
      viewbox: '0 0 118 245',
      nodes: [
        {
          name: 'function-4',
          stroke: '#1D1D1D',
          fill: '#fff',
          strokew: 1,
          x: 4.5,
          y: 152.5,
          width: 59,
          height: 33,
          rx: 6,
          text: 'First Function',
          fontsize: '6px',
          linepoints: '33 137 33 150.038405 37.0192483 146.019157',

        },
        {
          name: 'function-3',
          stroke: '#1D1D1D',
          fill: '#fff',
          strokew: 1,
          x: 3.5,
          y: 153.5,
          width: 63,
          height: 35,
          rx: 6,
          text: 'Second Function',
          fontsize: '6px',
          linepoints: '67 171 74 171 74 159 81 159',
        }]
    }
  ];




  avtivePage = 'model';
  display = 'string';

  modalToggle = false;

  toggleModal() {
    this.modalToggle = !this.modalToggle;
  }

  changePage(pageName) {
    this.avtivePage = pageName;
  }



  // tslint:disable-next-line:member-ordering
  // constructor() { private route: ActivatedRoute; }

  // tslint:disable-next-line:semicolon
  ngOnInit() {

  }


}
