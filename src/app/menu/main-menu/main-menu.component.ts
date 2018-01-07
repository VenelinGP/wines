import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit {
private title = "Main menu";

@Input() showMenu: boolean;

public isHiddenHalfMagnum: boolean;
public bottleType = [
  {id:0, name:'half'}, 
  {id:1, name:'magnum'}
];

  constructor() { }

  ngOnInit() {
  }

  halfMagnum(){
    if(!this.isHiddenHalfMagnum){
      this.isHiddenHalfMagnum =!this.isHiddenHalfMagnum;
    }else {
      this.isHiddenHalfMagnum =!this.isHiddenHalfMagnum;
    }
  }
}
