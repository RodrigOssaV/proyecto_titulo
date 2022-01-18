import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})

export class ExcelService {

  isExcelFile!: boolean;
  spinnerEnabled = false;

  constructor() { }
  
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {
      const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
      FileSaver.saveAs(data, fileName + '_export_' + /* new  Date().getTime()  +*/ EXCEL_EXTENSION);
  }

  /* public importToExcelFile(event:any): void {
    const selectedFile = event.target.files[0]; 
    this.isExcelFile = !!selectedFile.name.match(/(.xls|.xlsx)/);
    if(this.isExcelFile){
      this.spinnerEnabled = true;
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);
      fileReader.onload = (event) => {
        let binaryData = event.target?.result;
        let workbook = XLSX.read(binaryData, {type:'binary'});
        workbook.SheetNames.forEach(sheet => {
          const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          //this.listDrivers = data;
          //this.convertedJson = JSON.stringify(data, undefined, 4);
        })
      }      
    }
  } */
}