import { Pipe, PipeTransform } from '@angular/core';
import { WineItem } from "../models/wine-item";
import { TypeWine } from "../models/typewine"

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {
  transform(items: WineItem[], selectedType: TypeWine) {
    let filteredWines = [];
    let filteredByType = [];
    if(selectedType){
       if(items){
           filteredByType = items.filter(item => item.wine_data.wine_type.name.toLowerCase() == selectedType.name.toLowerCase());
           filteredByType.forEach(wine => {filteredWines.push(wine)})
       } 
       return filteredWines;
    } else {
        return items;
    }
  }
}
