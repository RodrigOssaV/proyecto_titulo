import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPagesComponent } from './users-pages/users-pages.component';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    UsersPagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UsersPagesComponent
  ]
})
export class UsuarioPagesModule { }
