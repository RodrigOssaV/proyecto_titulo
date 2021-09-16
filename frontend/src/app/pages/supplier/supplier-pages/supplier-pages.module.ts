import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";

import { SupplierComponentsModule } from "../supplier-components/supplier-components.module";

import { SupplierTableComponent } from './supplier-table/supplier-table.component';
import { SupplierPanelComponent } from './supplier-panel/supplier-panel.component';

@NgModule({
  declarations: [
    SupplierTableComponent,
    SupplierPanelComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SupplierComponentsModule
  ],
  exports: [
    SupplierTableComponent,
    SupplierPanelComponent
  ]
})
export class SupplierPagesModule { }
