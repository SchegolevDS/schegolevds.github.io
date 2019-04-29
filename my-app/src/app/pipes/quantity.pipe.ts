import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity'
})
export class QuantityPipe implements PipeTransform {

  transform(value: any): any {
    value == 0 ? value = 'Корзина пустая': value == 1 ? value = value + ' Товар': value;
    value < 5 ? value = value + ' Товара': value >= 5 ? value = value + ' Товаров': value;
    return value;
  }

}
