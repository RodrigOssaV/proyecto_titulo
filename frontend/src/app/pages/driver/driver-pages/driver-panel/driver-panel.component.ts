import { Component, OnInit } from '@angular/core';
import { ExcelService } from "src/app/service/component/excel.service";
import { DriverService } from "src/app/service/driver/driver.service";

@Component({
  selector: 'app-driver-panel',
  templateUrl: './driver-panel.component.html',
  styleUrls: ['./driver-panel.component.css']
})
export class DriverPanelComponent implements OnInit {

  listDrivers: any;

  constructor(
    private excelService: ExcelService,
    private apiDriver: DriverService) { }

  ngOnInit(): void {
    this.loadDriver();
  }

  exportExcel(): void {
    /* console.log(this.listDrivers); */
    this.excelService.exportAsExcelFile(this.listDrivers, "drivers");
  }

  loadDriver(){
    this.apiDriver.get_drivers().subscribe(
      res => {
        this.listDrivers = res;
        /* console.log(this.listDrivers); */
      },
      err => {
        console.log(err);
      }
    );
  }

}
