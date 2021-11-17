import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule } from '@angular/forms';

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
    StatusComponentsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports: [
    StatusPanelComponent,
    StatusTableComponent
  ]
})
export class StatusPagesModule { }
