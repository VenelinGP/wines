import { Pipe, PipeTransform } from '@angular/core';
import { WineItem } from "../models/wine-item";

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(items: WineItem[], sort: string): any {
    if(items){
      if(sort == 'isAsc'){
        return items.sort((x,y) => {
          return x.price - y.price
        });
      } else if (sort == 'isDesc'){
        return items.sort((x, y) => {
          return y.price - x.price
        });
      } else {
        return items;
      }
    }
  }
}
