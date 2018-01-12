import { Pipe, PipeTransform } from '@angular/core';
import { WineItem } from "../models/wine-item";

@Pipe({
  name: 'regionFilter'
})
export class RegionFilterPipe implements PipeTransform {

  transform(items: WineItem[], selectedCountry: string, selectedRegion: string, isTrue: boolean): any {
    let filteredWines = [];
    let filteredByRegion = [];
    if(isTrue){
      if(selectedRegion){
        let regionItems: WineItem[] = items.filter(item =>{return item.wine_data.wine_country.name == selectedCountry});
        filteredByRegion = regionItems.filter(item => item.wine_data.wine_region.name == selectedRegion);
        filteredByRegion.forEach(wine => {filteredWines.push(wine)});
        return filteredWines;
      } else {
        return items;
      }
   } else {
       return items;
   }
  }
}
