import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

/* Componentes */
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from "./driver/driver.component";
import { SupplierComponent } from './supplier/supplier.component';
import { LoadComponent } from './load/load.component';
import { StatusLoadComponent } from './status-load/status-load.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FinancesComponent } from './finances/finances.component';
import { LoginComponent } from './login/login.component';

/* Pages Modulos */
import { DriverPagesModule } from "./driver/driver-pages/driver-pages.module";
import { SupplierPagesModule } from "./supplier/supplier-pages/supplier-pages.module";
import { LoadPagesModule } from "./load/load-pages/load-pages.module";
import { StatusPagesModule } from "./status-load/status-pages/status-pages.module";
import { UsuarioPagesModule } from "./usuario/usuario-pages/usuario-pages.module";
import { DashboardPagesModule } from "./dashboard/dashboard-pages/dashboard-pages.module";
import { FinancesPagesModule } from "./finances/finances-pages/finances-pages.module";

/* Components Modulos */
import { DriverComponentsModule } from "./driver/driver-components/driver-components.module";
import { SupplierComponentsModule } from "./supplier/supplier-components/supplier-components.module";
import { LoadComponentsModule } from "./load/load-components/load-components.module";
import { StatusComponentsModule } from "./status-load/status-components/status-components.module";
import { UsuarioComponentsModule } from "./usuario/usuario-components/usuario-components.module";
import { DashboardComponentsModule } from "./dashboard/dashboard-components/dashboard-components.module";

import { SharedModule } from "../shared/shared.module";
import { GraphicModule } from "../graphic/graphic.module";


@NgModule({
  declarations: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent,
    LoadComponent,
    StatusLoadComponent,
    UsuarioComponent,
    LoginComponent,
    FinancesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DriverPagesModule,
    DriverComponentsModule,
    SupplierPagesModule,
    SupplierComponentsModule,
    LoadPagesModule,
    LoadComponentsModule,
    StatusComponentsModule,
    StatusPagesModule,
    UsuarioComponentsModule,
    SharedModule,
    DashboardComponentsModule,
    DashboardPagesModule,
    UsuarioPagesModule,
    FinancesPagesModule,
    GraphicModule
  ],
  exports: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent,
    LoadComponent,
    StatusLoadComponent,
    UsuarioComponent,
    LoginComponent,
    FinancesComponent,
  ]
})
export class PagesModule { }
