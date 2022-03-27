import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-moderator',
  templateUrl: './dash-moderator.component.html',
  styleUrls: ['./dash-moderator.component.css']
})
export class DashModeratorComponent implements OnInit {

  numDrivers: number = 0;
  numSuppliers: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
