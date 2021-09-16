import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/class/driver';
import { DriverService } from "../../../../service/driver/driver.service";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  @Input() updateDriver: Driver = new Driver;

  constructor(private apiDriverService: DriverService) { }

  ngOnInit(): void {
  }

  update_Driver(form:any){
    this.apiDriverService.update_driver(this.updateDriver.rut, form.value).subscribe(
      res => {
        this.toggleEditarModal();
      },
      err => {
        console.log(err);
      }
    );
  }

  toggleEditarModal(){
    let modal = document.querySelector('#updateDriverModal')!;
    modal.classList.toggle('is-active');
  }

}
