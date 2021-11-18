import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { DashUserComponent } from './dash-user/dash-user.component';
import { DashModeratorComponent } from './dash-moderator/dash-moderator.component';

import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponentsModule } from "../dashboard-components/dashboard-components.module";
import { GraphicModule } from "src/app/graphic/graphic.module";

@NgModule({
  declarations: [
    DashAdminComponent,
    DashUserComponent,
    DashModeratorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardComponentsModule,
    GraphicModule
  ],
  exports: [
    DashAdminComponent,
    DashUserComponent,
    DashModeratorComponent
  ]
})
export class DashboardPagesModule { }
