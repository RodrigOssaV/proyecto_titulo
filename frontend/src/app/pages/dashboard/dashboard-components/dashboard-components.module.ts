import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from "ng2-charts";

import { LoadComponentsModule } from "../../load/load-components/load-components.module";
import { FinancesComponentsModule } from "../../finances/finances-components/finances-components.module";

import { DashTitleComponent } from './dash-title/dash-title.component';
import { DashDescriptionComponent } from './dash-description/dash-description.component';
import { ThirdCardComponent } from './dash-description/third-card/third-card.component';
import { FourthCardComponent } from './dash-description/fourth-card/fourth-card.component';

@NgModule({
  declarations: [
    DashTitleComponent,
    DashDescriptionComponent,
    ThirdCardComponent,
    FourthCardComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    LoadComponentsModule,
    FinancesComponentsModule
  ],
  exports: [
    DashTitleComponent,
    DashDescriptionComponent
  ]
})
export class DashboardComponentsModule { }
