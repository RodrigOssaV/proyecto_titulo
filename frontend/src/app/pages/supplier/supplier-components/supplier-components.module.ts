import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { AddFormComponent } from './add-form/add-form.component';
import { GraficSupplierComponent } from './grafic-supplier/grafic-supplier.component';

@NgModule({
  declarations: [
    AddFormComponent,
    GraficSupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    AddFormComponent,
    GraficSupplierComponent
  ]
})
export class SupplierComponentsModule { }
