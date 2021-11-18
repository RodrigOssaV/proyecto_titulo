import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { LoadAddFormComponent } from './load-add-form/load-add-form.component';

@NgModule({
  declarations: [
    LoadAddFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoadAddFormComponent
  ]
})
export class LoadComponentsModule { }
