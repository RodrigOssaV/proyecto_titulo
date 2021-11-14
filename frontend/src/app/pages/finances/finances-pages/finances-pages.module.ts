import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancesTableComponent } from './finances-table/finances-table.component';

@NgModule({
  declarations: [
    FinancesTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FinancesTableComponent
  ]
})
export class FinancesPagesModule { }
