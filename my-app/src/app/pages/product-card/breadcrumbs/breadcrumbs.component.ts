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

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
  }

}
