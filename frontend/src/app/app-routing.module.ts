import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./guard/auth.guard";

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DriverProfileComponent } from './pages/driver/driver-pages/driver-profile/driver-profile.component';
import { DriverComponent } from "./pages/driver/driver.component";
import { LoadComponent } from './pages/load/load.component';
import { StatusLoadComponent } from './pages/status-load/status-load.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { UsuarioComponent } from "./pages/usuario/usuario.component";

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: UsuarioComponent },
  { path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {title: 'Dashboard'} },
  { path: 'Driver', component: DriverComponent, canActivate: [AuthGuard], data: {title: 'Driver'} },
  { path: 'Supplier', component: SupplierComponent, canActivate: [AuthGuard] },
  { path: 'Load', component: LoadComponent, canActivate: [AuthGuard] },
  { path: 'Status', component: StatusLoadComponent, canActivate: [AuthGuard] },
  { path: 'Profile/:rut', component: DriverProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
