import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";

import { DriverComponentsModule } from "../driver-components/driver-components.module";

import { DriverPanelComponent } from './driver-panel/driver-panel.component';
import { DriverTableComponent } from './driver-table/driver-table.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  declarations: [
    DriverPanelComponent,
    DriverTableComponent,
    DriverProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DriverComponentsModule,
    SharedModule
  ],
  exports: [
    DriverPanelComponent,
    DriverTableComponent,
    DriverProfileComponent
  ]
})
export class DriverPagesModule { }
