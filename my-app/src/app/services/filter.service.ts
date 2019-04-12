import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  searchStr:string;
  Type: string = 'name';

  constructor() { }
}
