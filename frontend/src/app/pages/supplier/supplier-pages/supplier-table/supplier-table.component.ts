import { Component, OnInit } from '@angular/core';
import { Supplier } from "../../../../class/supplier";
import { SupplierService } from "../../../../service/supplier/supplier.service";

@Component({
  selector: 'app-supplier-table',
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.css']
})
export class SupplierTableComponent implements OnInit {

  listSupplier:any;

  constructor(private apiSupplier: SupplierService) {}

  ngOnInit(): void {
    this.apiSupplier.loadList.subscribe(isLoaded => {
      if(isLoaded === true){
        this.loadSupplier();
      }
    })
    this.loadSupplier();
  }

  loadSupplier(){
    this.apiSupplier.get_suppliers().subscribe(
      res => {
        this.listSupplier = res;
      },
      err => {
        console.log(err);
      }
    );
  }


}
