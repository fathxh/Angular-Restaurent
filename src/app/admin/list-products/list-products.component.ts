import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { filter } from 'rxjs';
import { ProductService } from 'src/app/product/service/product.service';



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, OnChanges {

  @Input() searchString='';

displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource:any[] = [];
  mainSource:any[]=[];
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
  ngOnChanges(changes: SimpleChanges){
    this.filterProducts()
  }
  filterProducts(){
    this.dataSource=[];
   this.mainSource.forEach((product:any)=>{
    if (product.name.includes(this.searchString)) {
      this.dataSource.push(product)
    }
   })
   
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
      this.mainSource=this.dataSource
    });
    

  }
  onDelete(id:any){
    this.productService.deleteProduct(id)
    this.productService.onDelete.subscribe(()=>{
      this.getFoodItems()
    })
  }
  onEdit(id:any){
    this.productService.editProduct(id)
    this.productService.onDelete.subscribe(()=>{
      this.getFoodItems()
    })
  }
}
