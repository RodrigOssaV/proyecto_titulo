import { Component, OnInit } from '@angular/core';
import { LoadService } from "../../../../service/load/load.service";

@Component({
  selector: 'app-load-table',
  templateUrl: './load-table.component.html',
  styleUrls: ['./load-table.component.css']
})
export class LoadTableComponent implements OnInit {

  listLoads:any;

  constructor(private apiLoad: LoadService) { }

  ngOnInit(): void {
    this.apiLoad.loadList.subscribe(isLoaded => {
      if(isLoaded === true){
        this.loadLoads();
      }
    })
    this.loadLoads();
  }

  loadLoads(){
    this.apiLoad.get_loads().subscribe(
      res => {
        this.listLoads = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
