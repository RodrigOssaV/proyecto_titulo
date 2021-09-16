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

  newRut = {
    rut: '',
    digito: ''
  };

  constructor(private apiDriverService: DriverService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  addDriver(form:any){
    this.newDriver.rut = this.newRut.rut+"-"+this.newRut.digito;

    this.apiDriverService.add_driver(this.newDriver).subscribe(
      res => {
        this.notificationService.showSuccess("Conductor agregado","Notificación");
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
