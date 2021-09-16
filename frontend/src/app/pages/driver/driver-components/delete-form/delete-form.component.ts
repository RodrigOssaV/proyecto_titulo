import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/class/driver';
import { NotificationService } from 'src/app/service/component/notification.service';
import { DriverService } from "../../../../service/driver/driver.service";


@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent implements OnInit {

  @Input() deleteDriver: Driver = new Driver;

  deleteRut!: string;

  constructor(private apiDriverService: DriverService, private notifyService: NotificationService) { }

  ngOnInit(): void {
    
  }

  delete_Driver(){
    this.deleteRut = this.deleteDriver.rut;
    this.apiDriverService.delete_driver(this.deleteRut).subscribe(
      res => {
        this.notifyService.showWarning("Conductor eliminado","Notificación");
        this.launchDeleteModal();
      },
      err => {
        console.log(err);
      }
    );
  }

  launchDeleteModal(){
    const modal = document.querySelector('#deleteDriverModal')!;
    modal.classList.toggle('is-active');
  }

}
