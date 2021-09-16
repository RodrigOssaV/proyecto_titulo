import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DriverService } from "../../../../service/driver/driver.service";
import { LoadService } from "src/app/service/load/load.service";

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css']
})
export class DriverProfileComponent implements OnInit {

  rutParametro: any;
  datos:any = [];
  detalleConductor:any = [];

  constructor(
    private route: ActivatedRoute, 
    private apiDriver: DriverService,
    private apiLoad: LoadService
    ) { }

  ngOnInit(): void {
    this.rutParametro = this.route.snapshot.paramMap.get('rut');
    this.obtenerConductor();
    this.obtenerDetalleConductor();
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
        console.log(this.detalleConductor);
      },
      err => {
        console.log(err);
      }
    );
  }

}
