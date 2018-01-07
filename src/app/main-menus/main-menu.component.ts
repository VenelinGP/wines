import { Component, OnInit } from '@angular/core';

import { MAINMENU } from "../data/main-menu";
import { Menu } from "../models/menu";
import { MenuService } from "../services/menu.service";
import { WinesService } from "../services/wines.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  private title = "Main Menu";
  private id = 0;
  private mainMenu: Menu[] = [];
  private wineTypes = new Set();
  selectedItem: Menu;
 
  constructor(private menuService: MenuService, private winesService: WinesService) { }

  ngOnInit() {
   this.getMenu({id: 0, name: 'Main Menu', image: ""});
   this.getWineTypes();
  }
  onSelect(item: Menu): void {
    this.selectedItem = item;
    this.getMenu(this.selectedItem)
  }

  getWineTypes(): void{
    this.winesService.getWines()
    .subscribe(data => {
      data.forEach(wine => {
        let wineType = wine.wine_data.wine_type.name;
        if(wine.wine_data.is_club == 1 && wine.in_stock > 0){
          this.wineTypes.add(wineType);
        }
      })
    })
  }

  getMenu(item: Menu){
    this.mainMenu = MAINMENU;
    if(item.id == 1){
      this.title = item.name;
      this.mainMenu = [];
     
      let id = 11;
      this.wineTypes.forEach(el =>{
        let element: Menu = { id:10, name:"", image:"" };
        element.name = el.toString();
        element.id = id;
        console.dir(element);
        this.mainMenu.push(element);
        id++;
      })
    }

    if(item.id == 2){
      this.title = item.name;
      this.menuService.getMenu()
        .subscribe(() => {
          let menu = [
            { id: 11, name: 'Red', image:""},
            { id: 12, name: 'White', image:""},
          ]
          this.mainMenu = menu;
        })
    }

    if(item.id == 3){
      this.title = item.name;
      this.menuService.getMenu()
        .subscribe(() => {
          let menu = [
            { id: 11, name: 'Red', image:""},
            { id: 12, name: 'White', image:""},
          ]
          this.mainMenu = menu;
        })
    }

    if(item.id == 4){
      this.title = item.name;
      this.menuService.getMenu()
        .subscribe(() => {
          let menu = [
            { id: 11, name: 'Red', image:""},
            { id: 12, name: 'White', image:""},
          ]
          this.mainMenu = menu;
        })
    }
  }
}
