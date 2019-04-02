import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-orderstatus-link',
  templateUrl: './orderstatus-link.component.html',
  styleUrls: ['./orderstatus-link.component.scss']
})
export class OrderstatusLinkComponent implements OnInit {
  @Input() classMod:string;

  constructor() { }

  ngOnInit() {
  }

}
