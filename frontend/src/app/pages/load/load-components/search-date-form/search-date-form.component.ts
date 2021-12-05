import { Component, OnInit } from '@angular/core';

import { LoadService } from "src/app/service/load/load.service";
import { ExcelService } from "src/app/service/component/excel.service";

@Component({
  selector: 'app-search-date-form',
  templateUrl: './search-date-form.component.html',
  styleUrls: ['./search-date-form.component.css']
})
export class SearchDateFormComponent implements OnInit {

  newDate = {
    start_date: '',
    end_date: ''
  }

  constructor(
    private apiLoad: LoadService,
    private apiExcel: ExcelService
    ) { }

  ngOnInit(): void {
  }

  searchDateList: any = [];

  searchDates(form:any){
    /* console.log(form.value); */
    this.apiLoad.search_between_dates(form.value).subscribe(
      res => {
        this.searchDateList = res;
        /* console.log(this.searchDateList); */
        this.exportAsXLSX(this.searchDateList);
      },
      err => {
        console.log(err);
      }
    );
  }

  exportAsXLSX(dato:any): void{
    /* let nameDriver = this.datos.name;  */   
    this.apiExcel.exportAsExcelFile(dato, 'report_date');
  }

}
