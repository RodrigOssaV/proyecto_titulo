import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

import { NavbarComponent } from './navbar/navbar.component';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
