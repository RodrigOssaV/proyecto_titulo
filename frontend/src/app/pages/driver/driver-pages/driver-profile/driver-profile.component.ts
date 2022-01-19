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

  runParametro: any;
  public datos:any = [];
  public detalleConductor:any = [];
  public detalleTotalConductor:any = [];

  num: number = 0;
  amount: number = 0;
  delivery: number = 0;
  not_delivery: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private apiDriver: DriverService,
    private apiLoad: LoadService,
    private excelService: ExcelService,
    private _authService: AuthService
    ) { }

  ngOnInit(): void {
    this.runParametro = this.route.snapshot.paramMap.get('run');
    /* console.log(this.runParametro); */
    this.obtenerConductor();
    this.obtenerDetalleConductor();
    this.obtenerTotalDriver();

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
    this.apiDriver.get_driver(this.runParametro).subscribe(
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
    this.apiLoad.get_load(this.runParametro).subscribe(
      res => {
        this.detalleConductor = res;
        /* console.log(this.detalleConductor); */
      },
      err => {
        console.log(err);;
      }
    );
  }

  obtenerTotalDriver(){
    this.apiLoad.get_total_driver(this.runParametro).subscribe(
      res => {
        this.detalleTotalConductor = res;
        /* console.log(this.detalleTotalConductor); */
        for(const total of this.detalleTotalConductor){
          this.amount = total.total_amount;
          this.delivery = total.total_delivery;
          this.not_delivery = total.total_not_delivery;
        }
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
