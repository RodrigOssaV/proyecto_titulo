import { Component, OnInit } from '@angular/core';

import { Supplier } from "src/app/class/supplier";
import { SupplierService } from "../../../../service/supplier/supplier.service";
import { FinancesService } from "src/app/service/finances/finances.service";


@Component({
  selector: 'app-supplier-table',
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.css']
})
export class SupplierTableComponent implements OnInit {

  listSupplier:any;
  statusSupplier: Supplier = new Supplier();

  constructor(private apiSupplier: SupplierService, private finances: FinancesService) {}

  ngOnInit(): void {
    this.apiSupplier.loadList.subscribe(isLoaded => {
      if(isLoaded === true){
        this.loadSupplier();
      }
    });
    this.finances.loadList.subscribe(isLoaded => {
      if(isLoaded === true){
        this.loadSupplier();
      }
    });
    this.loadSupplier();
  }

  editStatusSupplier(supplier: Supplier){
    this.statusSupplier = supplier;
    console.log(this.statusSupplier);
    const editModal = document.querySelector('#updateStatusSupplierModal')!;
    editModal.classList.toggle('is-active');
  }

  loadSupplier(){
    this.apiSupplier.get_suppliers().subscribe(
      res => {
        this.listSupplier = res;
        console.log(this.listSupplier);
      },
      err => {
        console.log(err);
      }
    );
  }
}
