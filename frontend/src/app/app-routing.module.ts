import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DriverProfileComponent } from './pages/driver/driver-pages/driver-profile/driver-profile.component';
import { DriverComponent } from "./pages/driver/driver.component";
import { LoadComponent } from './pages/load/load.component';
import { StatusLoadComponent } from './pages/status-load/status-load.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { UsuarioComponent } from "./pages/usuario/usuario.component";

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: UsuarioComponent},
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'Driver', component: DriverComponent},
  { path: 'Supplier', component: SupplierComponent},
  { path: 'Load', component: LoadComponent},
  { path: 'Status', component: StatusLoadComponent},
  { path: 'Profile/:rut', component: DriverProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
