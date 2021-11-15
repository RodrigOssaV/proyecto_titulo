import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from "ng2-charts";

import { GraphicFinancesSupplierComponent } from './graphic-finances-supplier/graphic-finances-supplier.component';
import { GraphicFinancesComponent } from './graphic-finances/graphic-finances.component';

@NgModule({
  declarations: [
    GraphicFinancesSupplierComponent,
    GraphicFinancesComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    GraphicFinancesSupplierComponent,
    GraphicFinancesComponent
  ]
})
export class FinancesComponentsModule { }
