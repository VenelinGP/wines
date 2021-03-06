import { Component, OnInit, Input } from '@angular/core';
import { WineItem } from "../../models/wine-item";

import { WinesService } from "../../services/wines.service";
import { TypeWine } from "../../models/typewine";

@Component({
  selector: 'app-wine-details-byregion',
  templateUrl: './wine-details-byregion.component.html',
  styleUrls: ['./wine-details-byregion.component.css']
})
export class WineDetailsByregionComponent implements OnInit {
  @Input() title: string = '';
  @Input() typeWine: TypeWine;
  @Input() isLocation: boolean;
  @Input() country: string;
  @Input() region: string;
  @Input() isVarietal: boolean;

  @Input() varietal: boolean;
  public wines: WineItem[]=[];

  private sortedByName: string = '';
  private sortedByPrice: string = '';
  private sortedByVintage: string = '';
  private sortedByRating: string = '';
  private isHiddenRatings = false;

  constructor(private winesService: WinesService) { }

  ngOnInit() {
    this.getWines();
  }

  getWines(){
    let wineType ='';
    this.winesService.getWines()
    .subscribe(data => {
      data.forEach(wine => {
        wineType = wine.wine_data.wine_type.name;
        if(wineType && this.typeWine){
          if(wine.wine_data.bottle_size == 750 && wine.in_stock > 0 && wine.item_type_id != undefined && wineType == this.typeWine.name ){
            this.wines.push(wine);
          }
        }
      })
    })
  }

  isHidden(args){
    if(args){
      this.isHiddenRatings = !this.isHiddenRatings;
    }
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
      if(this.sortedByRating == '' || this.sortedByRating == 'isDesc'){
        this.sortedByRating = 'isAsc';
      } else {
        this.sortedByRating = 'isDesc';
      }
    }
  }
}
