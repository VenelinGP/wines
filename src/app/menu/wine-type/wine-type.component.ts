import { Component, OnInit, OnDestroy, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TypeWine } from "../../models/typewine";
import { WinesService } from "../../services/wines.service";
import { WineItem } from "../../models/wine-item";

@Component({
  selector: 'app-wine-type',
  templateUrl: './wine-type.component.html',
  styleUrls: ['./wine-type.component.css']
})
export class WineTypeComponent implements OnInit, OnDestroy {
  public selectedTypeWine: TypeWine;
  private id: number;
  private sub: any;
  private title: string= "Bottle Wine";
  private wineType: string = '';
  private country: string = ''; 
  private region: string = ''
  private varietal: string = ''
  private isLocation: boolean = true;
  private isVarietal: boolean = false;
  private wineTypesSet = new Set();
  private wineLocationSet = new Set();
  private wineRegionSet = new Set();
  private wineVarietalSet = new Set();
  public wines: WineItem[]=[];

  @ViewChild("locat") locationLayot: ElementRef;
  @ViewChild("variet") varietalLayot: ElementRef;
  @ViewChild("wineLoc") wineLocationLayot: ElementRef;

  constructor(private winesService: WinesService,  private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getWineType();
    this.getWineTypes();
    this.getWines();
    this.onSelect();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
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
        if(id == this.id){
          this.wineType = el;
          this.selectedTypeWine = {id: id, name: el};
        }
        id++;
      })
    })
  }

  getWineType(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
  }

  getWines(){
    this.winesService.getWines()
    .subscribe(data => {
      data.forEach(wine => {
        let wineType = wine.wine_data.wine_type.name;
        if(wineType){
          if(wine.wine_data.bottle_size == 750 && wine.in_stock > 0 && wineType == this.wineType){
            this.wines.push(wine);
            let country = wine.wine_data.wine_country.name;
            if(country){
              this.wineLocationSet.add(country);
            }
            let varietal = wine.item_category.name;
            if(varietal){
              this.wineVarietalSet.add(varietal);
            }
          }
        }
      })
    })
  }

  getWineByLocation(){
    this.locationLayot.nativeElement.className = "btn btn-default active";
    this.varietalLayot.nativeElement.className = "btn btn-default";
    this.isLocation = true;
    this.isVarietal = false;
    this.region = '';
  }

  getRegion(currentCountry){
    this.country = currentCountry;
    this.getCountry(currentCountry);
  }

  getCountry(country){
    this.wineRegionSet.clear();
    this.wines.forEach(wine =>{
      if(wine.wine_data.wine_country.name == this.country){
        if(wine.wine_data.wine_region.name){
          this.wineRegionSet.add(wine.wine_data.wine_region.name)
        }
      }
    })
  }

  getRegionByCountry(currentRegion){
    this.region = currentRegion;
  }
  getWineByVarietal(){
    this.locationLayot.nativeElement.className = "btn btn-default";
    this.varietalLayot.nativeElement.className = "btn btn-default active"
    this.isLocation = false;
    this.isVarietal = true;
    this.varietal = '';
  }
  getVarietal(varietal: string){
    console.log(varietal);
    this.varietal = varietal;
  }
  onSelect(): void {
    this.selectedTypeWine = {id: 0, name: this.wineType};
  }

  goBack(): void {
    this.location.back();
  }
}
