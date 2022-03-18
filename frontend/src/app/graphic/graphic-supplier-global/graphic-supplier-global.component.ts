import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-supplier-global',
  templateUrl: './graphic-supplier-global.component.html',
  styleUrls: ['./graphic-supplier-global.component.css']
})
export class GraphicSupplierGlobalComponent implements OnInit {

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

  listDrivers: any;
  listSuppliers: any;
  listDataBase: any;
  private dato_base: any;
  private datos_base: any = [];  
  private name_driver: any = [];
  private dato_max: any;
  private datos_max: any = [];
  private dato_min: any;
  private datos_min: any = [];
  private dato_percent = 0;
  private datos_percent: any = [];
  private dato_amount_delivery: any;

  constructor(
    private finance: FinancesService,
  ) { }

  ngOnInit(): void {
    this.getDataBase();
  }

  getDataBase(){
    this.finance.results_all_suppliers().subscribe(
      res => {
        this.listDataBase = res;

        this.datos_base = [];
        this.name_driver = [];
        this.datos_min = [];
        this.datos_max = [];
        this.datos_percent = [];
        for(const data of this.listDataBase){
          this.dato_base = data.total_amount_loads;
          this.dato_max = data.max_delivery;
          this.dato_min = data.min_delivery;
          this.dato_amount_delivery = data.total_amount_delivery;
          this.dato_percent = Math.round((this.dato_amount_delivery/this.dato_base)*100);
          this.datos_base.push(this.dato_base);
          this.datos_max.push(this.dato_max);
          this.datos_min.push(this.dato_min);
          this.datos_percent.push(this.dato_percent);
          this.name_driver.push(data.razon_social);
        }
        this.cargarDatos(this.name_driver, this.datos_base, this.datos_max, this.datos_min, this.datos_percent);
      }, (err) => {
        console.log(err);
      }
    );
  }

  cargarDatos(name:any, datos:any, max:any, min:any, percent:any){
    this.barChartData = [];
    this.barChartLabels = [];
    this.barChartData.push({
      data: datos,
      type: 'bar',
      label: 'Total encomiendas asignadas',
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: false,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)'
    });
    this.barChartData.push({
      data: max,
      type: 'line',
      label: 'Max entregado',
      borderColor: 'rgb(75, 192, 192)',
      fill: false 
    });
    this.barChartData.push({
      data: min,
      type: 'line',
      label: 'Min. entregado',
      borderColor: 'rgb(255, 153, 255)',
      fill: false 
    });
    this.barChartData.push({
      data: percent,
      type: 'line',
      label: 'Porcentaje',
      borderColor: 'rgb(194, 42, 199)',
      fill: false 
    });
    for(const index in name){
      this.barChartLabels.push(name[index]);
    };
  }

}
