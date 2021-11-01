import { Component, OnInit } from '@angular/core';
import { DriverService } from "src/app/service/driver/driver.service";

@Component({
  selector: 'app-top-driver',
  templateUrl: './top-driver.component.html',
  styleUrls: ['./top-driver.component.css']
})
export class TopDriverComponent implements OnInit {

  listTopDrivers:any;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.loadTopDrivers();
  }

  loadTopDrivers(){
    this.driverService.top_drivers().subscribe(
      res => {
        this.listTopDrivers = res;
        /* console.log(this.listTopDrivers); */
      },
      err => {
        console.log(err);
      }
    );
  }

}
