import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions} from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

import { LoadService } from "src/app/service/load/load.service";

@Component({
  selector: 'app-graphic-load-delivery',
  templateUrl: './graphic-load-delivery.component.html',
  styleUrls: ['./graphic-load-delivery.component.css']
})
export class GraphicLoadDeliveryComponent implements OnInit {

  listSumLoads: any;
  totalPorcentage = 0;

  public doughnytChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    cutoutPercentage: 75    
  }

  public doughnutChartLabels: Label[] = ['Entregado', 'No entregado'];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColors: Color[] = [
    {
      // TODO ver tema colores velocimetro de encomiendas
      backgroundColor: ['rgb(75, 192, 192)','rgba(255, 99, 132)'],
    },
  ];

  constructor(private loadService: LoadService) { }

  ngOnInit(): void {
    this.sumLoad();
  }

  sumLoad(){
    this.loadService.get_sum_loads().subscribe(
      res => {
        this.listSumLoads = res;
        /* console.log(this.listSumLoads) */
        for(const sum of this.listSumLoads){
          this.totalPorcentage = Math.round((((sum.sumDeliverys)/(sum.sumLoads))*100));
          //this.doughnutChartData.push([this.totalPorcentage])
          this.doughnutChartData.push([sum.sumDeliverys])
          this.doughnutChartData.push([sum.sumNotDelivery])
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
