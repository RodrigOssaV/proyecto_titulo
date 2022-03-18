import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-driver',
  templateUrl: './graphic-driver.component.html',
  styleUrls: ['./graphic-driver.component.css']
})
export class GraphicDriverComponent implements OnInit {

  public barChartOptions: ChartOptions = {
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

  listResultDrivers:any = [];
  private dato_amount: any;
  private datos_amounts: any = [];
  private dato_delivery: any;
  private datos_deliverys: any = [];
  private dato_not_delivery: any;
  private datos_not_deliverys: any = [];
  private name:any = [];
  
  constructor(private finance: FinancesService) { }

  ngOnInit(): void {
    this.getDatosLimit();
  }

  getDatos(){
    this.finance.results_all_drivers().subscribe(
      res => {
        this.listResultDrivers = res;
        console.log(this.listResultDrivers);
        this.datos_amounts = [];
        this.datos_deliverys = [];
        this.datos_not_deliverys = [];
        this.name = [];
        for (const result of this.listResultDrivers) {
          /* array to personal data */
          this.dato_amount = result.total_amount_loads;
          this.dato_delivery = result.total_amount_delivery;
          this.dato_not_delivery = result.total_not_deliverys;
          /* personal data to personal arrays */
          this.datos_amounts.push(this.dato_amount);
          this.datos_deliverys.push(this.dato_delivery);
          this.datos_not_deliverys.push(this.dato_not_delivery);
          this.name.push(result.run_driver);
        };
        this.cargarDatos(this.datos_amounts, this.name, this.datos_deliverys, this.datos_not_deliverys);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getDatosLimit(){
    this.finance.results_all_drivers_limit().subscribe(
      res => {
        this.listResultDrivers = res;
        this.datos_amounts = [];
        this.datos_deliverys = [];
        this.datos_not_deliverys = [];
        this.name = [];
        for (const result of this.listResultDrivers) {
          /* array to personal data */
          this.dato_amount = result.total_amount_loads;
          this.dato_delivery = result.total_amount_delivery;
          this.dato_not_delivery = result.total_not_deliverys;
          /* personal data to personal arrays */
          this.datos_amounts.push(this.dato_amount);
          this.datos_deliverys.push(this.dato_delivery);
          this.datos_not_deliverys.push(this.dato_not_delivery);
          this.name.push(result.run_driver);
        };
        this.cargarDatos(this.datos_amounts, this.name, this.datos_deliverys, this.datos_not_deliverys);
      },
      (err) => {
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
      label: 'Total no entregado',
      borderColor: 'rgba(255, 99, 132)',
      fill: false,
    });
    this.barChartData.push({
      data: deliverys,
      type: 'line',
      label: 'Total entregado',
      borderColor: 'rgb(75, 192, 192)',
      fill: false 
    });      
    for(const index in name){
      this.barChartLabels.push(name[index]);
    };
  }

}
