import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";

import { SupplierComponentsModule } from "../supplier-components/supplier-components.module";

import { SupplierTableComponent } from './supplier-table/supplier-table.component';
import { SupplierPanelComponent } from './supplier-panel/supplier-panel.component';
import { TopSupplierComponent } from './top-supplier/top-supplier.component';

@NgModule({
  declarations: [
    SupplierTableComponent,
    SupplierPanelComponent,
    TopSupplierComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SupplierComponentsModule
  ],
  exports: [
    SupplierTableComponent,
    SupplierPanelComponent,
    TopSupplierComponent
  ]
})
export class SupplierPagesModule { }
