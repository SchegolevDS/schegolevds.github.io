import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity'
})
export class QuantityPipe implements PipeTransform {

  transform(value: any) {
    if (value == 0) {
      value = 'Корзина пустая'
    } else if (value == 1) {
      value = value + ' Товар'
    } else if (value < 5) {
      value = value + ' Товара'
    } else if (value >= 5) {
      value = value + ' Товаров'
    }
    return value;
  }

}
