import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  minValue: number = 1;
  maxValue: number = 15000;
  options: Options = {
    floor: 0,
    translate: (): string => {
      return ' ';
    }
  };

  constructor(private filter: AppService) {}

  sortingName() {
    this.filter.sortingName();
  }

  sortingPriceUp() {
    this.filter.sortingPriceUp();
  }

  sortingPriceDown() {
    this.filter.sortingPriceDown();
  }

  ngOnInit() {
  }

}
