import { Component, Input,Output, OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { filter } from 'rxjs';
import { ProductService } from 'src/app/product/service/product.service';
import { ConfirmationComponent } from 'src/app/shared/confirmation/confirmation.component';



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit, OnChanges {

  @Input() searchString='';
  @Output() editItem=new EventEmitter<any>()

displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource:any[] = [];
  mainSource:any[]=[];
  loaded=false;
  pageload='loading'

  constructor(private productService:ProductService,private dialog:MatDialog){
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
    // console.log(this.searchString);
    
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
      console.log(foodItems);
      this.dataSource=foodItems
      this.mainSource=this.dataSource
      let maxId=0;
      foodItems.forEach((item:any) =>{
        if(item.id>=maxId){
          maxId=item.id
        }
      })
        this.productService.currentMaxId=maxId

    },(err:any)=>{
      console.log(err);
    });
    

  }
  onDelete(name:any){ 
    const dialogRef=this.dialog.open(ConfirmationComponent, {
      height: '200px',
      width: '500px',
      data: {value: name,action:'Delete'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onConfirmDelete(name)
      }
      
    });
  }
  onConfirmDelete(name:any){  
    this.productService.deleteProduct(name).subscribe(()=>{
      
      this.productService.onDelete.subscribe(()=>{
        this.getFoodItems()
      })
      this.productService.onDelete.next()

    })
   
  }
  onEdit(item:any){
    // console.log("edit",item);
    this.editItem.emit(item)
  }
}
