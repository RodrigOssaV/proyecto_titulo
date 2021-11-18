import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";
import { NgxPaginationModule } from "ngx-pagination";
import { PipesModule } from "src/app/pipes/pipes.module";

import { LoadComponentsModule } from "../load-components/load-components.module";

import { LoadPanelComponent } from './load-panel/load-panel.component';
import { LoadTableComponent } from './load-table/load-table.component';

@NgModule({
  declarations: [
    LoadPanelComponent,
    LoadTableComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LoadComponentsModule,
    NgxPaginationModule,
    PipesModule
  ],
  exports: [
    LoadPanelComponent,
    LoadTableComponent
  ]
})
export class LoadPagesModule { }
