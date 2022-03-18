import { Component, Input, OnInit } from '@angular/core';

import { DetailLoad } from "src/app/class/detail-load";
import { DriverService } from "src/app/service/driver/driver.service";

@Component({
  selector: 'app-load-detail',
  templateUrl: './load-detail.component.html',
  styleUrls: ['./load-detail.component.css']
})
export class LoadDetailComponent implements OnInit {

  @Input() detail_Load: DetailLoad = new DetailLoad();
  profileDriver:any;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
  }

  obtenerRepartidor(){
    this.driverService.get_driver(this.detail_Load.run_driver).subscribe(
      res => {
        this.profileDriver = res;
        console.log(this.profileDriver);
      }, err => {
        console.log(err);
      }
    );
  }

  toggleEditarModal(){
    /* console.log(this.detail_Load); */
    /* this.obtenerRepartidor(); */
    let modal = document.querySelector('#detailLoadModal')!;
    modal.classList.toggle('is-active');
  }

}
