import { Injectable } from '@angular/core';
import { fooditems } from '../data/food-items';
import{ Observable,of,Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productNotifier = new Subject<void>()
  products=fooditems;
  constructor() { }


  getFoodItems(): Observable<any> {
    return of(this.products)
  }
  addproduct(data:any){
    const newProduct=Object.assign({},{
      "name": data.name,
        "description":data.description,
        "id": 2,
        "price": data.price,
        "iconName": 'biriyani',
        "rating": 3
    })
    this.products.push(newProduct)
    console.log(this.products);
    this.productNotifier.next()

  }

}
