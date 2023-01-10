import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit{
  constructor(public ps:ProductService){

  }
  ngOnInit(){
    this.getFoodItems();
  }

    displayedColumns: string[] = ['name', 'discription', 'price'];
  dataSource = [];
  getFoodItems(){
    this.ps.getFoodItems()
    .subscribe((food)=>{
      this.dataSource=food
      console.log('fooditems',this.dataSource);
      
    })
  }
}
