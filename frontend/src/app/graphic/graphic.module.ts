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
import { GraphicDriverMonthlyComponent } from './graphic-driver-monthly/graphic-driver-monthly.component';
import { GraphicDriverBysupplierComponent } from './graphic-driver-bysupplier/graphic-driver-bysupplier.component';
import { GraphicSupplierMonthlyComponent } from './graphic-supplier-monthly/graphic-supplier-monthly.component';
import { GraphicSupplierGlobalComponent } from './graphic-supplier-global/graphic-supplier-global.component';

@NgModule({
  declarations: [
    GraphicSupplierComponent,
    GraphicLoadComponent,
    GraphicDriverComponent,
    GraphicFinancesSupplierComponent,
    GraphicFinancesResultComponent,
    GraphicFinancesComponent,
    GraphicProfileDriverComponent,
    GraphicProfileMonthComponent,
    GraphicDriverMonthlyComponent,
    GraphicDriverBysupplierComponent,
    GraphicSupplierMonthlyComponent,
    GraphicSupplierGlobalComponent
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
    GraphicProfileMonthComponent,
    GraphicDriverMonthlyComponent,
    GraphicDriverBysupplierComponent,
    GraphicSupplierMonthlyComponent,
    GraphicSupplierGlobalComponent
  ]
})
export class GraphicModule { }
