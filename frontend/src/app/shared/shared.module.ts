import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

import { NavbarComponent } from './navbar/navbar.component';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { FooterComponent } from './footer/footer.component';
import { RequireRolComponent } from './require-rol/require-rol.component';
import { ButtonDynamicControlComponent } from './button-dynamic-control/button-dynamic-control.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent,
    RequireRolComponent,
    ButtonDynamicControlComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SubnavbarComponent,
    FooterComponent,
    RequireRolComponent,
    ButtonDynamicControlComponent
  ]
})
export class SharedModule { }
