import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/product/service/product.service';

export interface DialogData {
  name:any
  price:any
  description:any
  isEdit:boolean
  id:number
  rating:number
}

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent {
  name:any
  price:any
  description:any
  isEdit=false;
  id=0;
  rating=0;

  constructor(private service:ProductService,
    public dialogRef: MatDialogRef<AddProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit() {
    this.name = this.data.name;
    this.price = this.data.price;
    this.description = this.data.description;
    this.id=this.data.id;
    this.rating=this.data.rating;
    if(this.data.isEdit){
      this.isEdit=true
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
   this.service.addproduct({name:this.name,price:this.price,description:this.description}).subscribe((resp) => {
    this.dialogRef.close();
    this.service.productNotifier.next();
   });
   
  }
  onEdit(): void {
    const data={name:this.name,price:this.price,description:this.description,id:this.id,rating:this.rating}
   this.service.updateProduct(data)
   .subscribe(()=>{
    this.service.productNotifier.next();
   
   })
   this.dialogRef.close();
   
  }

}
