import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(products, searchStr: number) {
    if (!products || !searchStr) {
      return products;
    }

    return products.filter(product =>
      product.id === searchStr);
  }

}
