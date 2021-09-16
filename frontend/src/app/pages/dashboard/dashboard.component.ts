import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
  }
  tab = 1;

  isActive(tabId: number): boolean {
    return this.tab === tabId;
  }

  openTab(tabId: number): void {
    this.tab = tabId;
  }
}
