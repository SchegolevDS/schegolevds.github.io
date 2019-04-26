import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Options } from 'ng5-slider';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  @Input() itemsPerPage: number;
  @Output() itemsPerPageChange = new EventEmitter<number>();

  options: Options = {
    floor: 0,
    translate: (): string => {
      return ' ';
    }
  };

  change(newValue: number) {
     console.log('newvalue', newValue)
     this.itemsPerPage = newValue;
     this.itemsPerPageChange.emit(newValue);
   }

  constructor(public filter: Filter) {}

  ngOnInit() {
    this.itemsPerPage = 16;
  }

}
