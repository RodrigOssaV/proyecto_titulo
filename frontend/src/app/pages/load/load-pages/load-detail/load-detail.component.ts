import { Component, Input, OnInit } from '@angular/core';
import { Load } from 'src/app/class/load';

@Component({
  selector: 'app-load-detail',
  templateUrl: './load-detail.component.html',
  styleUrls: ['./load-detail.component.css']
})
export class LoadDetailComponent implements OnInit {

  @Input() detailLoad_: Load = new Load;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditarModal(){
    let modal = document.querySelector('#detailLoadModal')!;
    modal.classList.toggle('is-active');
  }

}
