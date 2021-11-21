import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent implements OnInit {

  numDrivers: number = 0;
  numSuppliers: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
