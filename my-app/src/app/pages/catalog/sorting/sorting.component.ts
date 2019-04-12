import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  sortingPage:number = 14;

  options: Options = {
    floor: 0,
    translate: (): string => {
      return ' ';
    }
  };

  constructor(public filter: AppService) {}

  ngOnInit() {
  }

}
