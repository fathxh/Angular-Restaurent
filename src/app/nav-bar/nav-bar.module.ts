import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NavListComponent } from './nav-list/nav-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    MenuBarComponent,
    NavListComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    MenuBarComponent,
  ]
})
export class NavBarModule { }
