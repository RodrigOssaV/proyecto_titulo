import { Component, OnInit } from '@angular/core';
import { DriverService } from "src/app/service/driver/driver.service";

@Component({
  selector: 'app-driver-topfive',
  templateUrl: './driver-topfive.component.html',
  styleUrls: ['./driver-topfive.component.css']
})
export class DriverTopfiveComponent implements OnInit {

  /* list drivers */
  listDrivers:any;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.loadList.subscribe(isLoaded => {
      if(isLoaded === true){
        this.loadListDrivers();
      }
    })
    this.loadListDrivers();
  }

  /* function to load list drivers */
  loadListDrivers(){
    this.driverService.get_drivers().subscribe(
      res => {
        this.listDrivers = res;
        console.log(this.listDrivers);
      },
      err => {
        /* console.log(err); */
      }
    );
  } 

}
