import { Injectable } from '@angular/core';
import { fooditems } from '../data/food-items';
import{ Observable,of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getFoodItems(): Observable<any> {
    return of(fooditems)
  }
}
