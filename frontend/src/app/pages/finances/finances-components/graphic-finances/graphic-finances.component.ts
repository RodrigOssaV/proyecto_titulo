import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graphic-finances',
  templateUrl: './graphic-finances.component.html',
  styleUrls: ['./graphic-finances.component.css']
})
export class GraphicFinancesComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['BMW', 'Ford'];
  
  public doughnutChartData: MultiDataSet = [[55, 25]];

  public doughnutChartType: ChartType = 'doughnut';

  public doughnytChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
    cutoutPercentage: 65    
  }
  public doughnutChartColors: Color[] = [
    {
      // TODO ver tema colores velocimetro de encomiendas
      backgroundColor: ['rgba(75, 192, 192, 0.8)','rgba(255, 99, 132, 0.2)'],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
