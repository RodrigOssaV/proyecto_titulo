import { Component, OnInit } from '@angular/core';

import { Supplier } from "../../../../class/supplier";
import { SupplierService } from "../../../../service/supplier/supplier.service";
import { NotificationService } from "../../../../service/component/notification.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  newSupplier: Supplier = new Supplier();

  newRUT = {
    rut: '',
    digito: ''
  }

  type_suppliers: string[] = ["Encomienda", "Sobre", "Diario", "Otro"];

  constructor(
    private apiSupplier: SupplierService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  addSupplier(form:any){
    this.newSupplier.rut = this.newRUT.rut+"-"+this.newRUT.digito;
    /* console.log(this.newSupplier); */
    this.apiSupplier.add_supplier(this.newSupplier).subscribe(
      res => {
        this.notifyService.showSuccess("Proveedor ingresado con éxito.","Completado");
        form.reset();
        this.launchModal();
      },
      err => {
        /* console.log(err); */
        this.notifyService.showWarning("Ya existe un registro del Proveedor", "Error en la operación.");
        /* form.reset();
        this.launchModal(); */
      }
    );
  }

  launchModal(){
    const modal = document.querySelector('.modal');
    modal?.classList.toggle('is-active');
  }
  
}
