import { Component, OnInit } from '@angular/core';
import { LoadService } from "../../../../service/load/load.service";

@Component({
  selector: 'app-load-table',
  templateUrl: './load-table.component.html',
  styleUrls: ['./load-table.component.css']
})
export class LoadTableComponent implements OnInit {

  listLoads:any;

  currentIndex = -1;
  page = 1;
  pageSize = 15;
  pageSizes = [15, 20, 35];

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
        /* console.log(this.listLoads); */
      },
      err => {
        console.log(err);
      }
    );
  }

  handlePageChange(event: number): void{
    this.page = event;
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }

}
