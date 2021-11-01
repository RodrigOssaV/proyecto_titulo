import { Component, OnInit } from '@angular/core';
import { SupplierService } from "src/app/service/supplier/supplier.service";

@Component({
  selector: 'app-top-supplier',
  templateUrl: './top-supplier.component.html',
  styleUrls: ['./top-supplier.component.css']
})
export class TopSupplierComponent implements OnInit {

  listTopSuppliers:any;

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.loadTopSuppliers();
  }

  loadTopSuppliers(){
    this.supplierService.top_suppliers().subscribe(
      res => {
        this.listTopSuppliers = res;
        /* console.log(this.listTopSuppliers); */
      },
      err => {
        console.log(err);
      }
    );
  }

}
