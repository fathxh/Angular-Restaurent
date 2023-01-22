import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    ProductRoutingModule,
    HttpClientModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductModule { }
