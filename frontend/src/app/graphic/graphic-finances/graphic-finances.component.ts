import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-finances',
  templateUrl: './graphic-finances.component.html',
  styleUrls: ['./graphic-finances.component.css']
})
export class GraphicFinancesComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Total encomiendas', 'Total entregadas'];  
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnytChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
    cutoutPercentage: 90,
    plugins: {
      legend: true
    },
    /* title: {
      display: true,
      text: 'Results'
    }, */ 
  }
  public doughnutChartColors: Color[] = [{ backgroundColor: ['rgb(75, 0, 130, 0.7)','rgba(138, 43, 226, 0.3)'] }];

  list_benefits: any;
  private num_amount: any;
  private num_delivery: any;
  private global_num: any = [];

  constructor(private financeService: FinancesService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.financeService.get_global_benefits().subscribe(
      res => {
        this.list_benefits = res;
        for(const benefit of this.list_benefits){
          this.num_amount = benefit.total_amount;
          this.num_delivery = benefit.total_delivery
          this.global_num.push(this.num_amount);
          this.global_num.push(this.num_delivery);
        }
        this.cargarDatos(this.global_num);
      }, (err) => {
        console.log(err);
      }
    );
  }

  cargarDatos(datos:any){
    this.doughnutChartData = [];
    for(const index of datos){
      this.doughnutChartData.push(index);
    };
  }

}
