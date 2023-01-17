import { Injectable } from '@angular/core';
import { fooditems } from '../data/food-items';
import{ Observable,of,Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productNotifier = new Subject<void>()
  onDelete = new Subject<void>()
  products=fooditems;
  constructor() { }


  getFoodItems(): Observable<any> {
    return of(this.products)
  }
  addproduct(data:any){
    const newProduct=Object.assign({},{
      "name": data.name,
        "description":data.description,
        "id": 11,
        "price": data.price,
        "iconName": 'biriyani',
        "rating": 3
    })
    this.products.push(newProduct)
    console.log(this.products);
    this.productNotifier.next()

  }
  deleteProduct(id:any){
    this.products.splice(this.products.findIndex(a => a.id ===id) , 1)
    console.log(this.products);
    this.onDelete.next()

  }
  editProduct(id:any){
    var data=this.products.splice(this.products.findIndex(a => a.id ===id) , 1)
    console.log(this.products);
    this.onDelete.next()

  }

}
