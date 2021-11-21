import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-driver-bysupplier',
  templateUrl: './graphic-driver-bysupplier.component.html',
  styleUrls: ['./graphic-driver-bysupplier.component.css']
})
export class GraphicDriverBysupplierComponent implements OnInit {

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
  private nameDriver: any = [];

  constructor(private finance: FinancesService) { }

  ngOnInit(): void {
    this.getDriverbySuppliers();
  }

  getDriverbySuppliers(){
    this.finance.results_drivers_by_suppliers().subscribe(
      res => {
        this.listDrivers = res;
        console.log(this.listDrivers);
        for(const driver of this.listDrivers){
          this.nameDriver.push(driver.rut);
        }
        this.cargarDatos(this.nameDriver);
      }, (err) => {
        console.log(err);
      }
    );
  }

  cargarDatos(name:any){
    this.barChartData = [];
    this.barChartLabels = [];
    /* this.barChartData.push({
      data: datos,
      type: 'bar',
      label: 'Total amount loads',
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: false,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)'
    });
    this.barChartData.push({
      data: not_deliverys,
      type: 'line',
      label: 'Total not delivery',
      borderColor: 'rgba(255, 99, 132)',
      fill: false,
    });
    this.barChartData.push({
      data: deliverys,
      type: 'line',
      label: 'Total delivery',
      borderColor: 'rgb(75, 192, 192)',
      fill: false 
    });   */    
    for(const index in name){
      this.barChartLabels.push(name[index]);
    };
  }

}
