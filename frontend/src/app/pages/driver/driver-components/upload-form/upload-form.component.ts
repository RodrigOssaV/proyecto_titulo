import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Driver } from "src/app/class/driver";
import { DriverService } from "src/app/service/driver/driver.service";
import { NotificationService } from "src/app/service/component/notification.service";

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  convertedJson!: string;
  isExcelFile!: boolean;
  spinnerEnabled = false;
  @ViewChild('inputFile') inputFile!: ElementRef;

  listDrivers: any = [];
  listNewDrivers: any = [];
  newRUN = {
    run: '',
    digito: ''
  };

  constructor(private apiDriver: DriverService, 
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
  }

  uploadExcel(){
    for(let driver of this.listDrivers){
      let newDriver = new Driver();
      this.newRUN.run = driver.run;
      this.newRUN.digito = driver.digito; 
      newDriver.name = driver.nombres;
      newDriver.lastname = driver.apellidos;
      newDriver.phone = driver.telefono;
      newDriver.run = this.newRUN.run+"-"+this.newRUN.digito;
      this.listNewDrivers.push(newDriver);
    }

    this.apiDriver.import_drivers(this.listNewDrivers).subscribe(
      res => {
        this.notificationService.showSuccess("Import drivers success","Notificación");
        this.launchModal();
      },
      err => {
        console.log(err);
      }
    )
  }
  
  fileUpload(event:any){
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
          this.listDrivers = data;
          /* this.convertedJson = JSON.stringify(data, undefined, 4); */
        })
      }      
    }
  }

  removeData(){
    this.inputFile.nativeElement.value = '';
    this.listDrivers = [];
    this.spinnerEnabled = false;
  }

  launchModal(){
    const modal = document.querySelector('.modal-upload');
    modal?.classList.toggle('is-active');
    this.inputFile.nativeElement.value = '';
    this.listDrivers = [];
    this.spinnerEnabled = false;
  }
}
