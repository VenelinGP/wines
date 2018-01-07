import { Pipe, PipeTransform } from '@angular/core';
import { WineItem } from "../models/wine-item";

@Pipe({
  name: 'sortByVintage'
})
export class SortByVintagePipe implements PipeTransform {

  transform(items: WineItem[], sort: string): any {
    if(items){
      if(sort == 'isAsc'){
        return items.sort((x,y) => {
          return x.wine_data.year - y.wine_data.year
        });
      } else if (sort == 'isDesc'){
        return items.sort((x, y) => {
          return y.wine_data.year - x.wine_data.year
        });
      } else {
        return items;
      }
    }
  }
}
