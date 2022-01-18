import { Component, OnInit } from '@angular/core';
import { ExcelService } from "src/app/service/component/excel.service";
import { SupplierService } from "src/app/service/supplier/supplier.service";

@Component({
  selector: 'app-supplier-panel',
  templateUrl: './supplier-panel.component.html',
  styleUrls: ['./supplier-panel.component.css']
})
export class SupplierPanelComponent implements OnInit {

  listSuppliers: any;

  constructor(
    private excelService: ExcelService,
    private apiSupplier: SupplierService) { }

  ngOnInit(): void {
    this.loadSuppliers();
  }

  exportExcel(): void {
    this.excelService.exportAsExcelFile(this.listSuppliers, "suppliers");
  }

  loadSuppliers(){
    this.apiSupplier.get_suppliers().subscribe(
      res => {
        this.listSuppliers = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
