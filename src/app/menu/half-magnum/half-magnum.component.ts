import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TypeWine } from "../../models/typewine";
import { WinesService } from "../../services/wines.service";

@Component({
  selector: 'app-half-magnum',
  templateUrl: './half-magnum.component.html',
  styleUrls: ['./half-magnum.component.css']
})
export class HalfMagnumComponent implements OnInit {
  public title = '';
  private typeOfBottle: string ='half';
  private selectedTypeWine: TypeWine;
  private wineTypesSet = new Set();
  public typeWines: TypeWine[]=[];
  constructor(private winesService: WinesService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getBottleType();
    this.getWineTypes();
  }
  onSelect(typeWine: TypeWine): void {
    this.selectedTypeWine = typeWine;
  }

  getBottleType(){
    let typeOfBottle = "half";
    const bottleTypeId = + this.route.snapshot.paramMap.get('id');
    if(bottleTypeId == 1){
      typeOfBottle = "magnum";
    }
    this.title = typeOfBottle;
    this.typeOfBottle = typeOfBottle;
  }
  
  getWineTypes(): void{
    const bottleTypeId = +this.route.snapshot.paramMap.get('id');
    this.winesService.getWines()
    .subscribe(data => {
      data.forEach(wine => {
        let wineType = wine.wine_data.wine_type.name;
        if(bottleTypeId == 0){
          if(wine.wine_data.bottle_size < 750 && wine.in_stock > 0 && wine.item_type_id != undefined){
            this.wineTypesSet.add(wineType);
          }
        }
        if(bottleTypeId == 1){
          if(wine.wine_data.bottle_size > 750 && wine.in_stock > 0 && wine.item_type_id != undefined){
            this.wineTypesSet.add(wineType);
          }
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
