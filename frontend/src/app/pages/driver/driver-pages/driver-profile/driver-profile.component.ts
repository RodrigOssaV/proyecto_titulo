import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DriverService } from "../../../../service/driver/driver.service";
import { LoadService } from "src/app/service/load/load.service";
import * as XLSX from 'xlsx';

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
        /* console.log(this.detalleConductor); */
      },
      err => {
        console.log(err);;
      }
    );
  }

  /* TODO Excel Service  */
  exportAsXLSX(): void {
    let elementTable = document.getElementById('table-driver')
    let nameDriver = this.datos.name;
    let nameFile = nameDriver + '.xlsx';
    
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(elementTable)

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, nameFile);
  }

}
