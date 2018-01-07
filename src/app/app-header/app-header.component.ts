import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { WineItem } from "../models/wine-item";
import { WinesService } from "../services/wines.service";



@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  wines$: Observable<WineItem[]>;
  private searchTerms = new Subject<string>();
  @ViewChild ('searchBox') searchBoxLayot: ElementRef;

  constructor(private winesService: WinesService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.wines$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.winesService.searchWines(term)),
    );
  }
  clearTerm(){
    this.searchBoxLayot.nativeElement.value = "";
  }
}
