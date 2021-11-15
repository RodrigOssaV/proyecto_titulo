import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from "src/app/pipes/pipes.module";

import { FinancesTableComponent } from './finances-table/finances-table.component';

@NgModule({
  declarations: [
    FinancesTableComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    FinancesTableComponent
  ]
})
export class FinancesPagesModule { }
