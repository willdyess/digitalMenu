import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  displayExplorer = false;

  toggleExplorer() {
    this.displayExplorer = !this.displayExplorer;
  }

  constructor() { }

  ngOnInit() {
  }

}
