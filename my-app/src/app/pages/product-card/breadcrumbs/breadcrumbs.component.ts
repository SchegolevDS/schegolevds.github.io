import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() id:number;
  @Input() name: string;
  category:string;
  categoryStr:string;

  constructor(private route: ActivatedRoute){
  }

  private _categoryStr() {
    if(this.category == "chairs") {
      this.categoryStr = "Стулья и кресла"
    }
    if(this.category == "beds") {
      this.categoryStr = "Кровати и матрасы"
    }
    if(this.category == "cabinets") {
      this.categoryStr = "Шкафы и комоды"
    }
    if(this.category == "kitchen") {
      this.categoryStr = "Мебель для кухни"
    }
    if(this.category == "home") {
      this.categoryStr = "Товары для дома"
    }
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this._categoryStr()
  }

}
