import { FormGroup, FormControl, Validators } from '@angular/forms';

export const CheckoutForm = new FormGroup({
  "city": new FormControl("", Validators.required),
  "room": new FormControl(),
  "floor": new FormControl(),
  "entrance": new FormControl(),
  "comment": new FormControl(),
  "name": new FormControl("", Validators.required),
  "family": new FormControl("", Validators.required),
  "email": new FormControl("", [
                      Validators.required,
                      Validators.pattern("[a-zA-Z_.,-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
                  ]),
  "phone": new FormControl("", [Validators.required,
                          Validators.pattern("8\ [0-9]{3}\ [0-9]{3}-[0-9]{2}-[0-9]{2}")
                        ])
})

//"8\ \([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" 8 (___) ___-__-__
