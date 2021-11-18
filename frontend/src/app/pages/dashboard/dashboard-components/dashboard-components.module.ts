import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from "ng2-charts";
import { GraphicModule } from "src/app/graphic/graphic.module";

import { LoadComponentsModule } from "../../load/load-components/load-components.module";

import { DashTitleComponent } from './dash-title/dash-title.component';
import { DashDescriptionComponent } from './dash-description/dash-description.component';

@NgModule({
  declarations: [
    DashTitleComponent,
    DashDescriptionComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    LoadComponentsModule,
    GraphicModule
  ],
  exports: [
    DashTitleComponent,
    DashDescriptionComponent
  ]
})
export class DashboardComponentsModule { }
