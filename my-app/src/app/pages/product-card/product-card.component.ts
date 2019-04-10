import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  public id: number;
  public name: string;
  public price: string;
  public img: string;
  public img2: string;
  public img3: string;
  public img4: string;
  public img5: string;
  public img6: string;

  public routeSubscription: Subscription;
  public querySubscription: Subscription;
  selectImg: string;
  description: string;
  additionalDescriptionHeadline: string;
  additionalDescription: string;

  constructor(private route: ActivatedRoute) {

    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.name = queryParam['name'];
        this.price = queryParam['price'];
        this.img = queryParam['img'];
        this.selectImg = this.img;
        this.img2 = queryParam['img2'];
        this.img3 = queryParam['img3'];
        this.img4 = queryParam['img4'];
        this.img5 = queryParam['img5'];
        this.img6 = queryParam['img6'];
        this.description = queryParam['description'];
        this.additionalDescriptionHeadline = queryParam['additionalDescriptionHeadline'];
        this.additionalDescription = queryParam['additionalDescription'];
      }
    );
  }



  select() {
    this.selectImg = this.img;
  }
  select2() {
    this.selectImg = this.img2;
  }
  select3() {
    this.selectImg = this.img3;
  }
  select4() {
    this.selectImg = this.img4;
  }

  ngOnInit() { }
}
