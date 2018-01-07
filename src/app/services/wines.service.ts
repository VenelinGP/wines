import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { WineItem } from '../models/wine-item'

const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Headers': 'origin, x-csrftoken, content-type, accept',
                            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json'})
};



@Injectable()
export class WinesService {
  
  // private winesUrl = 'https://libertyhouserestaurantmanagement.com/api/v2/bones_restaurant/get-wine-items';
  private winesUrl = 'api/wines';
  constructor(private http: HttpClient) { }

  getWinesFromUrl(): Observable<WineItem[]>{
    // console.log(httpOptions);
    return this.http.get<WineItem[]>(this.winesUrl, httpOptions)
  }

  getWines(): Observable<WineItem[]>{
    // console.log(httpOptions);
    return this.http.get<WineItem[]>(this.winesUrl);
  }
  searchWines(term: string): Observable<WineItem[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<WineItem[]>(`api/wines/?name=${term}`);
  }
}
