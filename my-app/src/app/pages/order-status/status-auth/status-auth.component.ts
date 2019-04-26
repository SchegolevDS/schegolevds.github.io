import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-status-auth',
  templateUrl: './status-auth.component.html',
  styleUrls: ['./status-auth.component.scss']
})
export class StatusAuthComponent implements OnInit {
  statusAuthForm = new FormGroup({
    "ordernumber": new FormControl("", Validators.required),
    "email": new FormControl("", [
                        Validators.required,
                        Validators.pattern("[a-zA-Z_.,-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
                    ]),
})

  constructor() { }

  ngOnInit() {
  }

}
