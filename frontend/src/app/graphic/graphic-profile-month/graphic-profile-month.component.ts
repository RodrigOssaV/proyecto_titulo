import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

import { LoadService } from "src/app/service/load/load.service";

@Component({
  selector: 'app-graphic-profile-month',
  templateUrl: './graphic-profile-month.component.html',
  styleUrls: ['./graphic-profile-month.component.css']
})
export class GraphicProfileMonthComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { 
      xAxes: [{}],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        } 
      }]
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  detalleConductor:any;
  listLoad:any;
  rutParametro: any;
  private dato: any;
  private datos: any = [];
  private dateLoad:any = [];
  private numLoad: any;
  private numLoads: any = [];
  private name: any = [];

  constructor(
    private loadService: LoadService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.rutParametro = this.route.snapshot.paramMap.get('rut');
    this.obtenerDetalleConductor();
  }

  obtenerDetalleConductor(){
    this.loadService.get_loads_monthly(this.rutParametro).subscribe(
      res => {
        this.detalleConductor = res;
        console.log(this.detalleConductor);
        for (const driver of this.detalleConductor) {
          this.dato = driver.totalDeliveryMonthly;
          this.numLoad = driver.totalLoadsMonthly;
          this.datos.push(this.dato);
          this.numLoads.push(this.numLoad);
          this.name.push(driver.nameMonth);          
        };
        const reversed = this.name.reverse();
        this.cargarDatos(this.datos, reversed, this.numLoads);
      },
      err => {
        console.log(err);;
      }
    );
  }

  cargarDatos(datos:any, dateLoad: any, numLoads: any){
    this.barChartLabels = [];
    this.barChartData = [];
    this.barChartData.push({ 
      data: datos, 
      label: 'Total delivery', 
      type: 'bar', 
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: false,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)'
    });
    this.barChartData.push({ 
      data: numLoads, 
      label: 'Total loads', 
      type: 'line', 
      borderColor: 'rgb(75, 192, 192)', 
      fill: false 
    });
    for(const index in dateLoad){
      this.barChartLabels.push(dateLoad[index]);
    };    
  };

}
