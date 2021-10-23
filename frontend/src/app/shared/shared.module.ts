import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

import { NavbarComponent } from './navbar/navbar.component';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SubnavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SubnavbarComponent
  ]
})
export class SharedModule { }
