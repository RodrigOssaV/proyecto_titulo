import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets, Chart} from 'chart.js';
import { Label, Color, MultiDataSet, SingleDataSet} from 'ng2-charts';

@Component({
  selector: 'app-graphic-finances-result',
  templateUrl: './graphic-finances-result.component.html',
  styleUrls: ['./graphic-finances-result.component.css']
})
export class GraphicFinancesResultComponent implements OnInit {

  public barChartData: SingleDataSet[] = [];
  public barChartLabels: Label[] = ['Percent Success', 'Percent Failured','Benefit empresa', 'Benefit drivers'];
  /* public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { 
      xAxes: [{
        ticks: {
          beginAtZero: true
        } 
      }],
      yAxes: [{
        stacked: true
      }]
    },
    plugins: {
      title: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'horizontalBar'; */
  public barChartLegend = false;
  public barChartColors: Color[] = [/* {backgroundColor:['rgba(75, 192, 192, 0.2)']} */]
  constructor() { }

  ngOnInit(): void {
    this.getGraphic();
  }

  getGraphic(){

    let ctx = document.getElementById("myChart") as HTMLCanvasElement;

    let myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['Percent Success', 'Percent Failured','Benefit empresa', 'Benefit drivers'],
        datasets: [
          {
            data: [100, 3,10,10],
            backgroundColor: 'rgba(40, 180, 99)'
          },
          {
            data: [150,150,0,0],
            backgroundColor: 'rgba(231, 76, 60, 0.8)'
          }
        ],
        
      },
      options: {
        responsive: true,
        plugins: {
          legend: false
        },
        title: {
          display: true,
          text: 'results'
        },
        scales: {
          xAxes: [{ stacked: false }],
          yAxes: [{ stacked: true }]
        },
      }
    });
  }

}
