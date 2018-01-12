import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import { TypeWine } from "../../models/typewine";
import { WinesService } from "../../services/wines.service";


@Component({
  selector: 'app-bottle-wine',
  templateUrl: './bottle-wine.component.html',
  styleUrls: ['./bottle-wine.component.css']
})
export class BottleWineComponent implements OnInit {
  public title = "Bottle Wine";
  public typeWines: TypeWine[]=[];
  private wineTypesSet = new Set();
  constructor(private winesService: WinesService, private location: Location) { }

  ngOnInit() {
    this.getWineTypes();
  }

  getWineTypes(): void{
    this.winesService.getWines()
    .subscribe(data => {
      data.forEach(wine => {
        let wineType = wine.wine_data.wine_type.name;
        if(wine.wine_data.bottle_size == 750 && wine.in_stock > 0){
          this.wineTypesSet.add(wineType);
        }
      })
      let id = 0;
      this.wineTypesSet.forEach(el=>{
        if(!(el == undefined)){
          let WT: TypeWine ={
            id: id,
            name: el
          }
          this.typeWines.push(WT);
          id++;
        }
      })
    })
  }
  goBack(): void {
    console.log(this.location.path());
    this.location.back();
  }
}
