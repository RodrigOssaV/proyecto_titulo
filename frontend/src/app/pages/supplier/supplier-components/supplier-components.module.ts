import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { AddFormComponent } from './add-form/add-form.component';
import { GraphicSupplierComponent } from "./graphic-supplier/graphic-supplier.component";
import { UpdateFormComponent } from './update-form/update-form.component';

@NgModule({
  declarations: [
    AddFormComponent,
    GraphicSupplierComponent,
    UpdateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    AddFormComponent,
    GraphicSupplierComponent,
    UpdateFormComponent
  ]
})
export class SupplierComponentsModule { }
