import { Component, Input, OnInit } from '@angular/core';

import { Supplier } from 'src/app/class/supplier';
import { NotificationService } from "src/app/service/component/notification.service";
import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  @Input() updateStatus: Supplier = new Supplier;

  newFinancesSupplier = {
    costEmpresa: 0,
    rut: ''
  };

  listSupplier:any;

  constructor(private financesService: FinancesService, private notifyService: NotificationService) { }

  ngOnInit(): void {
    /* console.log(this.updateStatusSupplier); */
  }

  update_StatusSupplier(form:any){
    this.newFinancesSupplier.costEmpresa = form.value.costEmpresa;
    this.newFinancesSupplier.rut = this.updateStatus.rut;
    /* console.log(this.newFinancesSupplier); */
    this.financesService.add_finances_supplier(this.newFinancesSupplier).subscribe(
      res => {
        this.notifyService.showSuccess('Estado actualizado con éxito.', "Completado.");
        form.reset();
        this.toggleEditarModal();
      },
      err => {
        console.log(err);
      }
    );
  }

  toggleEditarModal(){
    let modal = document.querySelector('#updateStatusSupplierModal')!;
    modal.classList.toggle('is-active');
  }

}
