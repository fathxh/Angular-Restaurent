import { Injectable } from '@angular/core';
import { fooditems } from '../data/food-items';
import{ Observable,of,Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productNotifier = new Subject<void>()
  onDelete = new Subject<void>()
  products=fooditems;
  constructor(private http:HttpClient) { }


  getFoodItems(): Observable<any> {
    return this.http.get('http://localhost:3000/products/list');
  }


  addproduct(data:any): Observable<any>{
    const newProduct=Object.assign({},{
      name: data.name,
      description:data.description,
      id: 2,
      price: data.price,
      iconName: 'biriyani',
      rating: 4
    })
    return this.http.post('http://localhost:3000/products', newProduct);
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
