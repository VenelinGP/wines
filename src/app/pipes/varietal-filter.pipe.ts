import { Pipe, PipeTransform } from '@angular/core';
import { WineItem } from "../models/wine-item";

@Pipe({
  name: 'varietalFilter'
})
export class VarietalFilterPipe implements PipeTransform {

  transform(items: WineItem[], selectedVarietal: string, isTrue: boolean): any {
    console.log("v",selectedVarietal, isTrue);

    let filteredWines = [];
    let filteredByVarietal = [];
    if(isTrue){
       if(selectedVarietal){
        filteredByVarietal = items.filter(item => item.item_category.name.toLowerCase() == selectedVarietal.toLowerCase());
        filteredByVarietal.forEach(wine => {filteredWines.push(wine)});
        return filteredWines;
       } else {
         return items;
       }
    } else {
        return items;
    }
  }

}
