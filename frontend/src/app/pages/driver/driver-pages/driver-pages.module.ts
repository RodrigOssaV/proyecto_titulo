import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../../app-routing.module";
import { FormsModule } from "@angular/forms";

import { DriverComponentsModule } from "../driver-components/driver-components.module";
import { SharedModule } from "../../../shared/shared.module";
import { GraphicModule } from "src/app/graphic/graphic.module";

import { DriverPanelComponent } from './driver-panel/driver-panel.component';
import { DriverTableComponent } from './driver-table/driver-table.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { TopDriverComponent } from "./top-driver/top-driver.component";

@NgModule({
  declarations: [
    DriverPanelComponent,
    DriverTableComponent,
    DriverProfileComponent,
    TopDriverComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DriverComponentsModule,
    SharedModule,
    GraphicModule,
    FormsModule
  ],
  exports: [
    DriverPanelComponent,
    DriverTableComponent,
    DriverProfileComponent,
    TopDriverComponent
  ]
})
export class DriverPagesModule { }
