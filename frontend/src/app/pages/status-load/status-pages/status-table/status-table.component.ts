import { Component, OnInit } from '@angular/core';
import { Statusload } from "../../../../class/statusload";
import { StatusService } from "../../../../service/status/status.service";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.css']
})
export class StatusTableComponent implements OnInit {

  listStatusLoads: any;
  statusloadEdit: Statusload = new Statusload();

  currentIndex = -1;
  page = 1;
  pageSize = 15;
  pageSizes = [15, 20, 35];
  
  filterTerm!: string;

  constructor(private apiStatus: StatusService) { }

  ngOnInit(): void {
    this.apiStatus.loadList.subscribe(isLoaded => {
      if(isLoaded === true){
        this.loadStatus();
      }
    })
    this.loadStatus();
  }

  loadStatus(){
    this.apiStatus.get_statusloads().subscribe(
      res => {
        this.listStatusLoads = res;
        /* console.log(this.listStatusLoads); */
      },
      err => {
        console.log(err);
      }
    );
  }

  editStatus(status: Statusload){
    this.statusloadEdit = status;
    /* console.log(this.statusloadEdit); */
    const editModal = document.querySelector('#updateStatusLoadModal')!;
    editModal.classList.toggle('is-active');
  }

  handlePageChange(event: number): void{
    this.page = event;
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }

}
