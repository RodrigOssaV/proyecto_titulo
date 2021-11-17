import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from "ng2-charts";
import { PipesModule } from "src/app/pipes/pipes.module";

import { GraphicFinancesSupplierComponent } from './graphic-finances-supplier/graphic-finances-supplier.component';
import { GraphicFinancesComponent } from './graphic-finances/graphic-finances.component';
import { GraphicFinancesResultComponent } from "./graphic-finances-result/graphic-finances-result.component";

@NgModule({
  declarations: [
    GraphicFinancesSupplierComponent,
    GraphicFinancesComponent,
    GraphicFinancesResultComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    PipesModule
  ],
  exports: [
    GraphicFinancesSupplierComponent,
    GraphicFinancesComponent,
    GraphicFinancesResultComponent
  ]
})
export class FinancesComponentsModule { }
