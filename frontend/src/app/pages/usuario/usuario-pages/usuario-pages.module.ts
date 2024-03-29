import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from "ngx-pagination";

import { SharedModule } from "src/app/shared/shared.module";
import { UsuarioComponentsModule } from "../usuario-components/usuario-components.module";
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [
    UserPanelComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuarioComponentsModule,
    NgxPaginationModule
  ],
  exports: [
    UserPanelComponent,
    UserTableComponent
  ]
})
export class UsuarioPagesModule { }
