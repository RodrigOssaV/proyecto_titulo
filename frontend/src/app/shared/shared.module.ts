import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

import { NavbarComponent } from './navbar/navbar.component';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { FooterComponent } from './footer/footer.component';
import { RequireRolComponent } from './require-rol/require-rol.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent,
    RequireRolComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent,
    RequireRolComponent
  ]
})
export class SharedModule { }
