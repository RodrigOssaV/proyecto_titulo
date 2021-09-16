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

  constructor(
    private apiSupplier: SupplierService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  addSupplier(form:any){
    this.apiSupplier.add_supplier(form.value).subscribe(
      res => {
        this.notifyService.showSuccess("Success incorporate supplier","Notificación");
        form.reset();
        this.launchModal();
      },
      err => {
        console.log(err);
      }
    );
  }

  launchModal(){
    const modal = document.querySelector('.modal');
    modal?.classList.toggle('is-active');
  }
  
}
