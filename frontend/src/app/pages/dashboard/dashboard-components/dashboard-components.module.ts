import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashTitleComponent } from './dash-title/dash-title.component';
import { DashDescriptionComponent } from './dash-description/dash-description.component';
import { PrimaryCardComponent } from './dash-description/primary-card/primary-card.component';
import { SecondCardComponent } from './dash-description/second-card/second-card.component';
import { ThirdCardComponent } from './dash-description/third-card/third-card.component';
import { FourthCardComponent } from './dash-description/fourth-card/fourth-card.component';

@NgModule({
  declarations: [
    DashTitleComponent,
    DashDescriptionComponent,
    PrimaryCardComponent,
    SecondCardComponent,
    ThirdCardComponent,
    FourthCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashTitleComponent,
    DashDescriptionComponent
  ]
})
export class DashboardComponentsModule { }
