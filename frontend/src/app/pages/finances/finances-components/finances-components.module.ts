import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from "ng2-charts";

import { GraphicFinancesSupplierComponent } from './graphic-finances-supplier/graphic-finances-supplier.component';

@NgModule({
  declarations: [
    GraphicFinancesSupplierComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    GraphicFinancesSupplierComponent
  ]
})
export class FinancesComponentsModule { }
