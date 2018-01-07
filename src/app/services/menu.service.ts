import { Injectable } from '@angular/core';
import { MAINMENU } from "../data/main-menu";
import { HALFMAGNUM } from "../data/half-magnum";
import { Menu } from "../models/menu";
import { Halfmagnum } from "../models/halfmagnum";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class MenuService {

  constructor() { }
  getMenu(): Observable<Menu[]> {
    return of(MAINMENU);
  }

  getHalfMagnum(): Observable<Halfmagnum[]> {
    return of(HALFMAGNUM);
  }
}
