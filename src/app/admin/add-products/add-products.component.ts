import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/product/service/product.service';

export interface DialogData {
  name:any
  price:any
  description:any
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

  constructor(private service:ProductService,
    public dialogRef: MatDialogRef<AddProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSave(): void {
   this.service.addproduct({name:this.name,price:this.price,description:this.description})
   this.dialogRef.close();
   
  }

}
