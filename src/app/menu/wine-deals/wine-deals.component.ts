import { Component, OnInit } from '@angular/core';
import { TypeWine } from "../../models/typewine";

import { WinesService } from "../../services/wines.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-wine-deals',
  templateUrl: './wine-deals.component.html',
  styleUrls: ['./wine-deals.component.css']
})

export class WineDealsComponent implements OnInit {

  private selectedTypeWine: TypeWine;
  public title = "Wine Deals";
  private wineTypesSet = new Set();

  public typeWines: TypeWine[]=[];

  constructor(private winesService: WinesService,  private location: Location) { }

  ngOnInit() {
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
        if(wine.wine_data.is_club == 1 && wine.in_stock > 0 && wine.item_type_id != undefined){
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
