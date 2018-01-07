import { Component, OnInit, Input } from '@angular/core';
import { TypeWine } from "../models/typewine";

import { WineItem } from "../models/wine-item";
import { WinesService } from "../services/wines.service";

@Component({
  selector: 'app-wine-details-bybottle',
  templateUrl: './wine-details-bybottle.component.html',
  styleUrls: ['./wine-details-bybottle.component.css']
})
export class WineDetailsBybottleComponent implements OnInit {
private title = 'Bottle Wine';
 @Input() typeWine: TypeWine;
 @Input() typeOfBottle: string;

 public wines: WineItem[]=[];
 private sortedByName: string = '';
 private sortedByPrice: string = '';
 private sortedByVintage: string = '';
 private sortedByRating: string = '';
 private isHiddenRatings = false;
  constructor(private winesService: WinesService) { }

  ngOnInit() {
    if(this.typeOfBottle = 'byTheGlass'){
      this.title = "By The Glass";
    }
    this.getWineBySize();
  }

  getWineBySize(): void{
    this.winesService.getWines()
    .subscribe(data => {
      data.forEach(wine => {
        let wineType = wine.wine_data.wine_type.name;
        wineType = wineType || 'Other';
        if(this.typeOfBottle == 'half'){
          if(wine.wine_data.bottle_size < 750 && wine.in_stock > 0 && wine.item_type_id != undefined){
            this.wines.push(wine);
          }
        }
        if(this.typeOfBottle == 'magnum'){
          if(wine.wine_data.bottle_size > 750 && wine.in_stock > 0 && wine.item_type_id != undefined){
            this.wines.push(wine);
          }
        }
        if(this.typeOfBottle == 'byTheGlass'){
          if(wine.wine_data.is_sold_by_glass == 1 && wine.in_stock > 0 && wine.price > 0 && wine.item_type_id != undefined){
            this.wines.push(wine);
          }
        }
      })
      console.log(this.wines);
    })
  }

  isHidden(args){
    if(args){
      this.isHiddenRatings = !this.isHiddenRatings;
    }
    console.log(this.isHiddenRatings);
    return this.isHiddenRatings;
  }

  sortByName(): void{
    this.sortedByPrice = '';
    this.sortedByVintage = '';
    this.sortedByRating = '';
  
    if(this.sortedByName == '' || this.sortedByName == 'isDesc'){
      this.sortedByName = 'isAsc'
    } else {
      this.sortedByName = 'isDesc'
    }
  }


  sortByPrice(): void{
    this.sortedByName == '';
    this.sortedByVintage = '';
    this.sortedByRating = '';

    if(this.sortedByPrice == '' || this.sortedByPrice == 'isDesc'){
      this.sortedByPrice = 'isAsc';
    } else {
      this.sortedByPrice = 'isDesc';
    }
  }
   
  sortByVintage(): void{
    this.sortedByName == '';
    this.sortedByPrice = '';
    this.sortedByRating = '';

    if(this.sortedByVintage == '' || this.sortedByVintage == 'isDesc'){
      this.sortedByVintage = 'isAsc'
    } else {
      this.sortedByVintage = 'isDesc';
    }
  }

  sortByRating(){
    this.sortedByName == '';
    this.sortedByPrice = '';
    this.sortedByVintage = '';
    if(this.isHiddenRatings){
      console.log("here");
      if(this.sortedByRating == '' || this.sortedByRating == 'isDesc'){
        this.sortedByRating = 'isAsc';
      } else {
        this.sortedByRating = 'isDesc';
      }
    }
  }
}
