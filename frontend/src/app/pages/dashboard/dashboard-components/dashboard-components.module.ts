import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashTitleComponent } from './dash-title/dash-title.component';
import { DashDescriptionComponent } from './dash-description/dash-description.component';

@NgModule({
  declarations: [
    DashTitleComponent,
    DashDescriptionComponent
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
