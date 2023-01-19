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
  
  updateProduct(product:any){
    this.products.forEach((item:any)=>{
      if(product.id === item.id){
        item.name=product.name;
        item.price=product.price;
        item.description=product.description;
      }
    })
    this.productNotifier.next();
  }

}
