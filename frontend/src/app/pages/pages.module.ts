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

import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent,
    LoadComponent,
    StatusLoadComponent,
    UsuarioComponent
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
    SharedModule
  ],
  exports: [
    DashboardComponent,
    DriverComponent,
    SupplierComponent,
    LoadComponent,
    StatusLoadComponent,
    UsuarioComponent
  ]
})
export class PagesModule { }
