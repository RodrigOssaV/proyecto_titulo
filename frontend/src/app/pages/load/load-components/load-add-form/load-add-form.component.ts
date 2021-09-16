import { Component, OnInit } from '@angular/core';
import { Load } from "../../../../class/load";

import { DriverService } from "../../../../service/driver/driver.service";
import { SupplierService } from "../../../../service/supplier/supplier.service";
import { LoadService } from "../../../../service/load/load.service";
import { NotificationService } from "../../../../service/component/notification.service";

@Component({
  selector: 'app-load-add-form',
  templateUrl: './load-add-form.component.html',
  styleUrls: ['./load-add-form.component.css']
})
export class LoadAddFormComponent implements OnInit {

  listDrivers: any;
  listSuppliers: any;
  load: Load = new Load();

  constructor(
    private apiDriver: DriverService,
    private apiSupplier: SupplierService,
    private apiLoad: LoadService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
    this.loadListDrivers();
    this.loadListSuppliers();
  }

  addLoad(form:any){
    this.apiLoad.add_load(form.value).subscribe(
      res => {
        this.notifyService.showSuccess("Success assigments","Notificación");
        form.reset();
        this.launchModal();
      },
      err => {
        console.log(err);
      }
    )
  }

  loadListDrivers(){
    this.apiDriver.get_drivers().subscribe(
      res => {
        this.listDrivers = res;
        /* console.log(this.listDrivers); */
      },
      err => {
        console.log(err);
      }
    );
  }

  loadListSuppliers(){
    this.apiSupplier.get_suppliers().subscribe(
      res => {
        this.listSuppliers = res;
        /* console.log(this.listSuppliers); */
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
