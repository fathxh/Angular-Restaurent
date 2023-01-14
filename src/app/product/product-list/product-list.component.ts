import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  foodItems:any =[];


  constructor(public ps:ProductService){
    this.ps.productNotifier.subscribe(()=>{
      this.getFoodItems()
    })
  }

  ngOnInit(){
    this.getFoodItems();
  }

getFoodItems(){
  this.ps.getFoodItems()
  .subscribe((food)=>{
    this.foodItems=food
    console.log('fooditems',this.foodItems);
    
  })
}

}
