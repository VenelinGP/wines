import { Pipe, PipeTransform } from '@angular/core';
import { WineItem } from "../models/wine-item";

@Pipe({
  name: 'sortByRating'
})
export class SortByRatingPipe implements PipeTransform {
  transform(items: WineItem[], sort: string): any {
    if(items){
      if(sort == 'isAsc'){
        return items.sort((x,y) => {
          return x.wine_data.average_rating - y.wine_data.average_rating;
        });
      } else if (sort == 'isDesc'){
        return items.sort((x, y) => {
          return y.wine_data.average_rating - x.wine_data.average_rating;
        });
      } else {
        return items;
      }
    }
  }
}
