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

/* Modulos */
import { DriverPagesModule } from "./driver/driver-pages/driver-pages.module";
import { DriverComponentsModule } from "./driver/driver-components/driver-components.module";

import { SupplierPagesModule } from "./supplier/supplier-pages/supplier-pages.module";
import { SupplierComponentsModule } from "./supplier/supplier-components/supplier-components.module";

import { LoadPagesModule } from "./load/load-pages/load-pages.module";
import { LoadComponentsModule } from "./load/load-components/load-components.module";

import { StatusComponentsModule } from "./status-load/status-components/status-components.module";
import { StatusPagesModule } from "./status-load/status-pages/status-pages.module";

import { UsuarioComponentsModule } from "./usuario/usuario-components/usuario-components.module";
import { UsuarioPagesModule } from "./usuario/usuario-pages/usuario-pages.module";

import { DashboardComponentsModule } from "./dashboard/dashboard-components/dashboard-components.module";
import { DashboardPagesModule } from "./dashboard/dashboard-pages/dashboard-pages.module";

import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent,
    LoadComponent,
    StatusLoadComponent,
    UsuarioComponent,
    LoginComponent,
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
    UsuarioPagesModule
  ],
  exports: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent,
    LoadComponent,
    StatusLoadComponent,
    UsuarioComponent,
    LoginComponent
  ]
})
export class PagesModule { }
