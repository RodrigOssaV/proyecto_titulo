import { Component, OnInit } from '@angular/core';
import { DriverService } from "src/app/service/driver/driver.service";

@Component({
  selector: 'app-third-card',
  templateUrl: './third-card.component.html',
  styleUrls: ['./third-card.component.css']
})
export class ThirdCardComponent implements OnInit {

  bestDriver: any;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.best_driver();
  }

  best_driver(){
    this.driverService.best_driver().subscribe(
      res => {
        this.bestDriver = res;
        /* console.log(this.bestDriver); */
      },
      err => {
        console.log(err);
      }
    );
  }

}
