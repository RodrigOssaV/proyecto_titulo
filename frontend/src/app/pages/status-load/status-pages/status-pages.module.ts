import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";

import { StatusComponentsModule } from "../status-components/status-components.module";

import { StatusPanelComponent } from './status-panel/status-panel.component';
import { StatusTableComponent } from './status-table/status-table.component';

@NgModule({
  declarations: [
    StatusPanelComponent,
    StatusTableComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    StatusComponentsModule
  ],
  exports: [
    StatusPanelComponent,
    StatusTableComponent
  ]
})
export class StatusPagesModule { }
