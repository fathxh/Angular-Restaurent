import { Component } from '@angular/core';
import { ProductService } from 'src/app/product/service/product.service';



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource = [];
  loaded=false;
  pageload='loading'

  constructor(private productService:ProductService){
    this.productService.productNotifier.subscribe(()=>{
      this.getFoodItems()
    })
  }

  ngOnInit(){
    this.getFoodItems()
  }

  getFoodItems(){
    this.pageload='loading'
  this.loaded=true;
    this.productService.getFoodItems()
    .subscribe((foodItems:any)=>{
    setTimeout(() => {
    this.pageload='completed'
    },0); 
      this.dataSource=foodItems
    });
  }

}
