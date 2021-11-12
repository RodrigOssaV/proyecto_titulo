import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions} from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-fourth-card',
  templateUrl: './fourth-card.component.html',
  styleUrls: ['./fourth-card.component.css']
})
export class FourthCardComponent implements OnInit {

  public doughnytCharOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
  }

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [
    [350, 450]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
