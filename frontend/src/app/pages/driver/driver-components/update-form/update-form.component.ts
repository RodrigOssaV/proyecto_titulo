import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/class/driver';
import { DriverService } from "src/app/service/driver/driver.service";
import { NotificationService } from "src/app/service/component/notification.service";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  @Input() updateDriver: Driver = new Driver;

  type_drivers: string[] = ["Externo", "Interno"];

  constructor(private apiDriverService: DriverService, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  update_Driver(form:any){
    this.apiDriverService.update_driver(this.updateDriver.run, form.value).subscribe(
      res => {
        this.notifyService.showSuccess("Conductor modificado con éxito.", "Completado.");
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
