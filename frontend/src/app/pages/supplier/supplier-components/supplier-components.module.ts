import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AddFormComponent } from './add-form/add-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';

@NgModule({
  declarations: [
    AddFormComponent,
    UpdateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AddFormComponent,
    UpdateFormComponent
  ]
})
export class SupplierComponentsModule { }
