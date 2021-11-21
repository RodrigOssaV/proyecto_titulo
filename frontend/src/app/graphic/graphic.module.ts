import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { PipesModule } from "src/app/pipes/pipes.module";

import { GraphicSupplierComponent } from './graphic-supplier/graphic-supplier.component';
import { GraphicLoadComponent } from './graphic-load/graphic-load.component';
import { GraphicDriverComponent } from './graphic-driver/graphic-driver.component';
import { GraphicFinancesSupplierComponent } from './graphic-finances-supplier/graphic-finances-supplier.component';
import { GraphicFinancesResultComponent } from './graphic-finances-result/graphic-finances-result.component';
import { GraphicFinancesComponent } from './graphic-finances/graphic-finances.component';
import { GraphicProfileDriverComponent } from './graphic-profile-driver/graphic-profile-driver.component';
import { GraphicProfileMonthComponent } from './graphic-profile-month/graphic-profile-month.component';

@NgModule({
  declarations: [
    GraphicSupplierComponent,
    GraphicLoadComponent,
    GraphicDriverComponent,
    GraphicFinancesSupplierComponent,
    GraphicFinancesResultComponent,
    GraphicFinancesComponent,
    GraphicProfileDriverComponent,
    GraphicProfileMonthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    PipesModule
  ],
  exports: [
    GraphicSupplierComponent,
    GraphicLoadComponent,
    GraphicDriverComponent,
    GraphicFinancesSupplierComponent,
    GraphicFinancesComponent,
    GraphicFinancesResultComponent,
    GraphicProfileDriverComponent,
    GraphicProfileMonthComponent
  ]
})
export class GraphicModule { }
