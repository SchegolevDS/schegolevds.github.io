import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(products, searchStr: string) {
    if (!products || !searchStr) {
      return products;
    }

    return products.filter(product =>
      product.name.toLowerCase().includes(searchStr.toLowerCase()));
  }

}
