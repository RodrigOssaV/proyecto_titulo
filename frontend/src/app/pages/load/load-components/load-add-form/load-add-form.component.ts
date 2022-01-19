import { Component, OnInit } from '@angular/core';

import { Load } from "src/app/class/load";

import { DriverService } from "src/app/service/driver/driver.service";
import { SupplierService } from "src/app/service/supplier/supplier.service";
import { LoadService } from "src/app/service/load/load.service";
import { NotificationService } from "src/app/service/component/notification.service";

@Component({
  selector: 'app-load-add-form',
  templateUrl: './load-add-form.component.html',
  styleUrls: ['./load-add-form.component.css']
})
export class LoadAddFormComponent implements OnInit {

  listDrivers: any;
  listSuppliers: any;
  newLoad: Load = new Load();

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
    /* console.log(form.value); */
    this.apiLoad.add_load(form.value).subscribe(
      res => {
        this.notifyService.showSuccess("Success assigments","Notificación");
        form.reset();
        this.launchModal();
      },
      err => {
        console.log(err);
      }
    );
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
