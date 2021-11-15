import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { DashUserComponent } from './dash-user/dash-user.component';
import { DashModeratorComponent } from './dash-moderator/dash-moderator.component';

import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponentsModule } from "../dashboard-components/dashboard-components.module";
import { DriverComponentsModule } from "../../driver/driver-components/driver-components.module";
import { SupplierComponentsModule } from "../../supplier/supplier-components/supplier-components.module";
import { LoadComponentsModule } from "../../load/load-components/load-components.module";
import { FinancesComponentsModule } from "../../finances/finances-components/finances-components.module";

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
    DriverComponentsModule,
    SupplierComponentsModule,
    LoadComponentsModule,
    FinancesComponentsModule
  ],
  exports: [
    DashAdminComponent,
    DashUserComponent,
    DashModeratorComponent
  ]
})
export class DashboardPagesModule { }
