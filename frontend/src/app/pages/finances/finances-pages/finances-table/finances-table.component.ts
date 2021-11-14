import { Component, OnInit } from '@angular/core';
import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-finances-table',
  templateUrl: './finances-table.component.html',
  styleUrls: ['./finances-table.component.css']
})
export class FinancesTableComponent implements OnInit {

  constructor(private financeService: FinancesService) { }

  listFinances: any;

  ngOnInit(): void {
    this.loadListFinances();
  }

  loadListFinances(){
    this.financeService.get_all_finances().subscribe(
      res => {
        this.listFinances = res;
        console.log(this.listFinances);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
