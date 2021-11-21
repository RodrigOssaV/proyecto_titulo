import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DriverService } from "../../../../service/driver/driver.service";
import { LoadService } from "src/app/service/load/load.service";
import { ExcelService } from "src/app/service/component/excel.service";
import { AuthService } from 'src/app/service/usuario/auth.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css']
})
export class DriverProfileComponent implements OnInit {


  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username?: string;

  rutParametro: any;
  datos:any = [];
  detalleConductor:any = [];

  num: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private apiDriver: DriverService,
    private apiLoad: LoadService,
    private excelService: ExcelService,
    private _authService: AuthService
    ) { }

  ngOnInit(): void {
    this.rutParametro = this.route.snapshot.paramMap.get('rut');
    this.obtenerConductor();
    this.obtenerDetalleConductor();

    this.isLoggedIn = !!this._authService.getToken();

    if (this.isLoggedIn) {
      const user = this._authService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }

  obtenerConductor(){
    this.apiDriver.get_driver(this.rutParametro).subscribe(
      res => {
        this.datos = res;
        /* console.log(this.datos); */
      },
      err => {
        console.log(err);
      }
    );
  }

  obtenerDetalleConductor(){
    this.apiLoad.get_load(this.rutParametro).subscribe(
      res => {
        this.detalleConductor = res;
        /* console.log(this.detalleConductor); */
      },
      err => {
        console.log(err);;
      }
    );
  }

  exportAsXLSX(): void{
    let nameDriver = this.datos.name;    
    this.excelService.exportAsExcelFile(this.detalleConductor, nameDriver);
  }

}
