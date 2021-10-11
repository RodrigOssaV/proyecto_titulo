import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { AddFormComponent } from './add-form/add-form.component';
import { GraphicSupplierComponent } from "./graphic-supplier/graphic-supplier.component";

@NgModule({
  declarations: [
    AddFormComponent,
    GraphicSupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    AddFormComponent,
    GraphicSupplierComponent
  ]
})
export class SupplierComponentsModule { }
