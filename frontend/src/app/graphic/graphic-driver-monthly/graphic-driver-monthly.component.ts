import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-driver-monthly',
  templateUrl: './graphic-driver-monthly.component.html',
  styleUrls: ['./graphic-driver-monthly.component.css']
})
export class GraphicDriverMonthlyComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: { 
      xAxes: [{}],
      yAxes: [{
        ticks: {
          beginAtZero: true
        } 
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top'
      },
    }  
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  // datos que vamos a cargar en las graficas
  public barChartData: ChartDataSets[] = [];

  listResultMonthly: any;
  private dato_amount: any;
  private datos_amounts: any = [];
  private dato_delivery: any;
  private datos_deliverys: any = [];
  private dato_not_delivery: any;
  private datos_not_deliverys: any = [];
  private name:any = [];

  constructor(private finance: FinancesService) { }

  ngOnInit(): void {
    this.getMonthly();
  }

  getMonthly(){
    this.finance.results_drivers_monthly().subscribe(
      res => {
        this.listResultMonthly = res;
        console.log(this.listResultMonthly);
        for(const result of this.listResultMonthly){
          this.dato_amount = result.total_loads_monthly;
          this.dato_delivery = result.total_delivery_monthly;
          this.dato_not_delivery = result.total_not_delivery;
          this.datos_amounts.push(this.dato_amount);
          this.datos_deliverys.push(this.dato_delivery);
          this.datos_not_deliverys.push(this.dato_not_delivery);
          this.name.push(result.nameMonth);
        }
        /* const reversed = this.name.reverse(); */
        this.cargarDatos(this.datos_amounts, this.name, this.datos_deliverys, this.datos_not_deliverys);
      }, (err) => {
        console.log(err);
      }
    );
  }

  cargarDatos(datos:any, name:any, deliverys:any, not_deliverys:any){
    this.barChartData = [];
    this.barChartLabels = [];
    this.barChartData.push({
      data: datos,
      type: 'bar',
      label: 'Total encomiendas',
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: false,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)'
    });
    this.barChartData.push({
      data: not_deliverys,
      type: 'line',
      label: 'Total no entregadas',
      borderColor: 'rgba(255, 99, 132)',
      fill: false,
    });
    this.barChartData.push({
      data: deliverys,
      type: 'line',
      label: 'Total entregadas',
      borderColor: 'rgb(75, 192, 192)',
      fill: false 
    });      
    for(const index in name){
      this.barChartLabels.push(name[index]);
    };
  }

}
