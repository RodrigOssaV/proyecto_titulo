import { Component, OnInit } from '@angular/core';
import { SupplierService } from "src/app/service/supplier/supplier.service";

@Component({
  selector: 'app-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.css']
})
export class SecondCardComponent implements OnInit {

  bestSupplier: any;

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.best_Supplier();
  }

  best_Supplier(){
    this.supplierService.best_supplier().subscribe(
      res => {
        this.bestSupplier = res;
        /* console.log(this.bestSupplier); */
      },
      err => {
        console.log(err);
      }
    );
  }
}
