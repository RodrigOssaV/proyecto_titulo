import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-user',
  templateUrl: './dash-user.component.html',
  styleUrls: ['./dash-user.component.css']
})
export class DashUserComponent implements OnInit {

  numSuppliers: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
