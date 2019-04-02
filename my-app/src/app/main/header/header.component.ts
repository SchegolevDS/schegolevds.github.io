import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean;
  toogleSearch() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() {
    if (window.innerWidth > 1000) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }

  ngOnInit() {
  }

}
