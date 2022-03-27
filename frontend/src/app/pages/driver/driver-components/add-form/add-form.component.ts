import { Component, OnInit } from '@angular/core';
import { Driver } from "../../../../class/driver";
import { DriverService } from "../../../../service/driver/driver.service";
import { NotificationService } from "../../../../service/component/notification.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  newDriver: Driver = new Driver();

  newRUN = {
    run: '',
    digito: ''
  };

  type_drivers: string[] = ["Externo", "Interno"];

  constructor(private apiDriverService: DriverService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  addDriver(form:any){
    this.newDriver.run = this.newRUN.run+"-"+this.newRUN.digito;

    this.apiDriverService.add_driver(this.newDriver).subscribe(
      res => {
        this.notificationService.showSuccess("Conductor agregado con éxito.","Completado.");
        form.reset();
        this.launchModal();
      },
      err => {
        this.notificationService.showWarning("Ya existe un registro del conductor", "Error en la operación.");
        console.log(err);
      }
    );    
  }

  launchModal(){
    const modal = document.querySelector('.modal');
    modal?.classList.toggle('is-active');
  }

}
