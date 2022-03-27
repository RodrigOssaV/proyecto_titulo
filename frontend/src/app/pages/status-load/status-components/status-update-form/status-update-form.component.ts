import { Component, Input, OnInit } from '@angular/core';

import { Statusload } from 'src/app/class/statusload';

/* Services */
import { StatusService } from "src/app/service/status/status.service";
import { NotificationService } from "src/app/service/component/notification.service";

@Component({
  selector: 'app-status-update-form',
  templateUrl: './status-update-form.component.html',
  styleUrls: ['./status-update-form.component.css']
})
export class StatusUpdateFormComponent implements OnInit {

  @Input() updateStatusLoad: Statusload = new Statusload;
  
  delivery: number = 0;
  not_delivery: number = 0;
  received: number = 0;

  constructor(private apiStatus: StatusService, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  setAmount(){
    /* TODO check this amount delivery */
    this.received = this.updateStatusLoad.received;
    this.delivery = this.updateStatusLoad.delivery;
    this.not_delivery = this.received - this.delivery;
    this.updateStatusLoad.not_delivery = this.not_delivery;
  }

  update_status_load(data:any){
    this.setAmount();
    data = this.updateStatusLoad;
    /* console.log(this.updateStatusLoad); */
    this.apiStatus.update_status(this.updateStatusLoad.id_status_load, data).subscribe(
      res => {
        this.notifyService.showSuccess("Operación realizada con éxito.", "Completado.");
        this.updateStatusLoadModal()
      },
      err => {
        console.log(err);
      }
    );
  }

  updateStatusLoadModal(){
    let modal = document.querySelector('#updateStatusLoadModal');
    modal?.classList.toggle('is-active');
  }

}
