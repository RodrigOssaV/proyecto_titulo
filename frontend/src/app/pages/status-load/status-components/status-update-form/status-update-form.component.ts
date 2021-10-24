import { Component, Input, OnInit } from '@angular/core';
import { Statusload } from 'src/app/class/statusload';
import { StatusService } from "src/app/service/status/status.service";

@Component({
  selector: 'app-status-update-form',
  templateUrl: './status-update-form.component.html',
  styleUrls: ['./status-update-form.component.css']
})
export class StatusUpdateFormComponent implements OnInit {

  @Input() updateStatusLoad: Statusload = new Statusload;
  
  delivery: number = 0;
  not_delivery: number = 0;
  resto: number = 0;

  constructor(private apiStatus: StatusService) { }

  ngOnInit(): void {
  }

  setAmount(){
    this.delivery = this.updateStatusLoad.delivery;
    this.not_delivery = this.updateStatusLoad.not_delivery;
    this.resto = this.delivery - this.not_delivery;
    this.updateStatusLoad.not_delivery = this.resto;
  }

  update_status_load(data:any){
    /* this.setAmount();
    data = this.updateStatusLoad; */
    this.apiStatus.update_status(this.updateStatusLoad.id_status_load, data).subscribe(
      res => {
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
