import { Injectable } from '@angular/core';
import { Options } from 'ng5-slider';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  cart= [];

  searchStr:string;
  Type: string = 'name';

  public sortingName() {
    this.Type = 'name';
  }

  public sortingPriceUp() {
    this.Type = '-price';
  }

  public sortingPriceDown() {
    this.Type = 'price';
  }

  constructor() {
  }
}
