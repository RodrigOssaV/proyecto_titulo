import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DriverService } from "../../../../service/driver/driver.service";
import { LoadService } from "src/app/service/load/load.service";
import { ExcelService } from "src/app/service/component/excel.service";
import { PdfService } from "src/app/service/component/pdf.service";

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
    private apiLoad: LoadService,
    private excelService: ExcelService,
    private pdfService: PdfService
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

  exportAsXLSX(): void{
    let nameDriver = this.datos.name;    
    this.excelService.exportAsExcelFile(this.detalleConductor, nameDriver);
  }

  exportAsPDF(){
    var data = document.getElementById('tableToConvert');
    this.pdfService.createPDF(data);
  }

}
