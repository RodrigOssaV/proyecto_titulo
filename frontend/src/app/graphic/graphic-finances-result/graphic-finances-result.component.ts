import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets} from 'chart.js';
import { Label, Color } from 'ng2-charts';

import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-finances-result',
  templateUrl: './graphic-finances-result.component.html',
  styleUrls: ['./graphic-finances-result.component.css']
})
export class GraphicFinancesResultComponent implements OnInit {

  public barChartType: ChartType = 'horizontalBar';
  public barChartData: ChartDataSets[] = [];
  public barChartLabels: Label[] = [];
  public barChartOptions: ChartOptions = {
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
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            ticks: {
              crossAlign: 'far'
            }
          }
        }
      }
    }
  };
  public barChartLegend = false;

  list_benefits: any;
  name = ['Drivers', 'Suppliers'];
  private dato_driver: any;
  private datos_drivers: any = [];
  private dato_supplier: any;
  private datos_suppliers: any = [];

  constructor(private finance: FinancesService) { }

  ngOnInit(): void {
    this.loadResult();
  }

  loadResult(){
    this.finance.get_global_benefits().subscribe(
      res => {
        this.list_benefits = res;
        console.log(this.list_benefits);
        for(const benefit of this.list_benefits){
          this.dato_driver = benefit.benefits_drivers;
          this.dato_supplier = benefit.benefits_empresa;
          this.datos_drivers.push(this.dato_driver);
          this.datos_suppliers.push(this.dato_supplier);
        }
        this.cargarDatos(this.datos_drivers, this.datos_suppliers, this.name);
      }, (err) => {
        console.log(err);
      }
    );
  }

  
  cargarDatos(drivers:any, suppliers:any, name:any){
    this.barChartData = [];
    this.barChartLabels = [];
    this.barChartData.push({
      data: drivers,
      label: 'Benefit drivers',
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)',
    });
    this.barChartData.push({
      data: suppliers,

      label: 'Benefit empresa',
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)',
    });
    for(const index in name){
      this.barChartLabels.push(name[index]);
    };
  }
}
