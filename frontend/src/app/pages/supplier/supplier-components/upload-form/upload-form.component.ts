import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SupplierService } from "src/app/service/supplier/supplier.service";
import { NotificationService } from "src/app/service/component/notification.service";

import { Supplier } from "src/app/class/supplier";
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

  listSuppliers: any = [];
  listNewSuppliers: any = [];

  constructor(
    private supplierService: SupplierService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  uploadExcel(){
    for(let supplier of this.listSuppliers){
      let newSupplier = new Supplier();
      newSupplier.razon_social = supplier.nombre;
      newSupplier.type_supplier = supplier.tipo_proveedor;
      this.listNewSuppliers.push(newSupplier);
    }
    this.supplierService.import_suppliers(this.listNewSuppliers).subscribe(
      res => {
        this.notificationService.showSuccess("Import suppliers success","Notificación");
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
          this.listSuppliers = data;
          this.convertedJson = JSON.stringify(data, undefined, 4);
        })
      }      
    }
  }

  removeData(){
    this.inputFile.nativeElement.value = '';
    this.listSuppliers = [];
    this.spinnerEnabled = false;
  }

  launchModal(){
    const modal = document.querySelector('.modal-upload');
    modal?.classList.toggle('is-active');
    this.inputFile.nativeElement.value = '';
    this.listSuppliers = [];
    this.spinnerEnabled = false;
  }

}
