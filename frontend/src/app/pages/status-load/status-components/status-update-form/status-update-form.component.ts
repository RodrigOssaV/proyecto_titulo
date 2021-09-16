import { Component, Input, OnInit } from '@angular/core';
import { Statusload } from 'src/app/class/statusload';

@Component({
  selector: 'app-status-update-form',
  templateUrl: './status-update-form.component.html',
  styleUrls: ['./status-update-form.component.css']
})
export class StatusUpdateFormComponent implements OnInit {

  @Input() updateStatusLoad: Statusload = new Statusload;

  constructor() { }

  ngOnInit(): void {
  }

  updateStatusLoadModal(){
    let modal = document.querySelector('#updateStatusLoadModal')!;
    modal.classList.toggle('is-active');
  }

  update_status_load(form:any){
    
  }

}
