import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WineItem } from "../../models/wine-item";
import { WinesService } from "../../services/wines.service";

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})


export class WineDetailsComponent implements OnInit {
  title = 'Wine details';
  public wine: WineItem;
  private bottleTypeId: number;

  constructor(private winesService: WinesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bottleTypeId = +this.route.snapshot.paramMap.get('id');
    this.getWines();
  }
  getWines(){
    this.winesService.getWines()
    .subscribe(data => {
      data.forEach(wine => {
        let wineType = wine.wine_data.wine_type.name;
        if(wineType){
          if(wine.wine_data.bottle_size == 750 && wine.in_stock > 0 && wine.item_id == this.bottleTypeId && wine.item_type_id != undefined){
            this.wine = wine;
          }
        }
      })
    })
  }

}
