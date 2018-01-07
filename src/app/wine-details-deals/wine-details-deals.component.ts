import { Component, OnInit, Input } from '@angular/core';
import { WineItem } from "../models/wine-item";
import { TypeWine } from "../models/typewine";
import { WineType } from "../models/wine-type";

import { WinesService } from '../services/wines.service';

@Component({
  selector: 'app-wine-details-deals',
  templateUrl: './wine-details-deals.component.html',
  styleUrls: ['./wine-details-deals.component.css']
})
export class WineDetailsDealsComponent implements OnInit {

  title = 'Wine details';
  public wines: WineItem[]=[];

  @Input() typeWine: TypeWine;
  private getWineTypes: WineType;
  private sortedByName: string = '';
  private sortedByPrice: string = '';
  private sortedByVintage: string = '';
  private sortedByRating: string = '';

  private isHiddenRatings = false;

  constructor(private winesService: WinesService) { }

  ngOnInit() {
    this.getWines();
    //console.log(this.typeWine);
  }

  getWines(): void {
    this.winesService.getWines()
      .subscribe(data => {
        data.forEach(wine => {
            if(wine.wine_data.is_club == 1 && wine.in_stock > 0 && wine.item_type_id != undefined){
              if(wine.wine_data.wine_ratings.length == 0){
                wine.wine_data.average_rating = 0.00;
              } else {
                let avg_rating = 0.00;
                wine.wine_data.wine_ratings.forEach(element=>{
                    avg_rating += element.rating;
                  });
                wine.wine_data.average_rating = avg_rating/wine.wine_data.wine_ratings.length;
              }
              this.wines.push(wine);
            }
        });
      });
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
      console.log("here");
      if(this.sortedByRating == '' || this.sortedByRating == 'isDesc'){
        this.sortedByRating = 'isAsc';
      } else {
        this.sortedByRating = 'isDesc';
      }
    }
  }
}
