import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { TypeWine } from "../../models/typewine";
import { WinesService } from "../../services/wines.service";

@Component({
  selector: 'app-by-the-glass',
  templateUrl: './by-the-glass.component.html',
  styleUrls: ['./by-the-glass.component.css']
})
export class ByTheGlassComponent implements OnInit {
  public title = "By The Glass";
  private typeOfBottle: string ='';
  private wineTypesSet = new Set();
  private selectedTypeWine: TypeWine;

  public typeWines: TypeWine[]=[];

  constructor(private winesService: WinesService, private location: Location) { }

  ngOnInit() {
    this.typeOfBottle ='byTheGlass';
    this.getWineTypes();
  }
  onSelect(typeWine: TypeWine): void {
    this.selectedTypeWine = typeWine;
  }

  getWineTypes(): void{
    this.winesService.getWines()
    .subscribe(data => {
      data.forEach(wine => {
        let wineType = wine.wine_data.wine_type.name;
        if(wine.wine_data.is_sold_by_glass == 1 && wine.in_stock > 0 && wine.price > 0 && wine.item_type_id != undefined) {
          this.wineTypesSet.add(wineType);
        }
      })
      let id = 0;
      this.wineTypesSet.forEach(el=>{
        let WT: TypeWine ={
          id: id,
          name: el
        }
        this.typeWines.push(WT);
        id++;
      })
    })
  }
 
  goBack(): void {
    this.location.back();
  }
}
