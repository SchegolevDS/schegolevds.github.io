import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-collapse',
  templateUrl: './img-collapse.component.html',
  styleUrls: ['./img-collapse.component.scss']
})
export class ImgCollapseComponent implements OnInit {

  productImg = ['/assets/img/content/01.jpg', '/assets/img/content/2.jpg',
'/assets/img/content/3.jpg','/assets/img/content/4.jpg',];
  selectImg:string = this.productImg[0];
  select() {
    this.selectImg = this.productImg[0];
  }
  select1() {
    this.selectImg = this.productImg[1];
  }
  select2() {
    this.selectImg = this.productImg[2];
  }
  select3() {
    this.selectImg = this.productImg[3];
  }
  constructor() { }

  ngOnInit() {
  }

}
