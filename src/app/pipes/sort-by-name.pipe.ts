import { Pipe, PipeTransform } from '@angular/core';
import { WineItem } from "../models/wine-item";

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {
  transform(items: WineItem[], sort: string): any {
    if(sort == 'isAsc'){
      if(items){
        return items.sort((x, y) => {
          return x.name.localeCompare(y.name);
        });
      }
    } else if (sort == 'isDesc'){
      return items.sort((x, y) => {
        return y.name.localeCompare(x.name);
      });
    } else {
      return items;
    }
  }
}
