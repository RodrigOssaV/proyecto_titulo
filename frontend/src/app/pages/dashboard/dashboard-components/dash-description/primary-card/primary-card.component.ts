import { Component, OnInit } from '@angular/core';
import { LoadService } from "src/app/service/load/load.service";

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrls: ['./primary-card.component.css']
})
export class PrimaryCardComponent implements OnInit {

  listSumLoads: any;

  constructor(private loadService: LoadService) { }

  ngOnInit(): void {
    this.sumLoad();
  }

  sumLoad(){
    this.loadService.get_sum_loads().subscribe(
      res => {
        this.listSumLoads = res;
        /* console.log(this.listSumLoads); */
      },
      err => {
        console.log(err);
      }
    );
  }

}
