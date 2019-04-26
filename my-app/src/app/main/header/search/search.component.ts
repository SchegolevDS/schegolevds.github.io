import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(public filter: Filter) { }

  ngOnInit() {
  }

}
