import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

import { LoadService } from "src/app/service/load/load.service";

@Component({
  selector: 'app-graphic-profile-driver',
  templateUrl: './graphic-profile-driver.component.html',
  styleUrls: ['./graphic-profile-driver.component.css']
})
export class GraphicProfileDriverComponent implements OnInit {

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
  runParametro: any;
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
    this.runParametro = this.route.snapshot.paramMap.get('run');
    this.obtenerDetalleConductor();
  }

  obtenerDetalleConductor(){
    this.loadService.get_loads_today(this.runParametro).subscribe(
      res => {
        this.detalleConductor = res;
        this.datos = [];
        this.dateLoad = [];
        this.numLoads= [];
        for (const driver of this.detalleConductor) {
          this.dato = driver.amount_load;
          this.numLoad = driver.amount_delivery;
          this.datos.push(this.dato);
          this.numLoads.push(this.numLoad);
          this.dateLoad.push(driver.date_load);          
        };
        const reversed = this.dateLoad.reverse();
        this.cargarDatos(this.datos, reversed, this.numLoads);
      },
      err => {
        console.log(err);;
      }
    );
  }

  changeTwoWeeks(){
    this.loadService.get_loads_lastweeks(this.runParametro).subscribe(
      res => {
        this.detalleConductor = res;
        this.datos = [];
        this.dateLoad = [];
        this.numLoads= [];
        for (const driver of this.detalleConductor) {
          this.dato = driver.amount_load;
          this.numLoad = driver.amount_delivery;
          this.datos.push(this.dato);
          this.numLoads.push(this.numLoad);
          this.dateLoad.push(driver.date_load);          
        };
        const reversed = this.dateLoad.reverse();
        this.cargarDatos(this.datos, reversed, this.numLoads);
        },
        err => {
          console.log(err);
      }
    );
  }
  
  changeThreeWeeks(){
    this.loadService.get_loads_final(this.runParametro).subscribe(
      res => {
        this.detalleConductor = res;
        this.datos = [];
        this.dateLoad = [];
        this.numLoads= [];
        for(const driver of this.detalleConductor){
          this.dato = driver.amount_load;
          this.numLoad = driver.amount_delivery;
          this.datos.push(this.dato);
          this.numLoads.push(this.numLoad);
          this.dateLoad.push(driver.date_load); 
        };
        const reversed = this.dateLoad.reverse();
        this.cargarDatos(this.datos, reversed, this.numLoads);
      }, (err) => {
        console.log(err);
      }
    );
  }

  cargarDatos(datos:any, dateLoad: any, numLoads: any){
    this.barChartLabels = [];
    this.barChartData = [];
    this.barChartData.push({ 
      data: datos, 
      label: 'Cantidad asignada', 
      type: 'bar', 
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: false,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)'
    });
    this.barChartData.push({ 
      data: numLoads, 
      label: 'Cantidad entregada', 
      type: 'line', 
      borderColor: 'rgb(75, 192, 192)', 
      fill: false 
    });
    for(const index in dateLoad){
      this.barChartLabels.push(dateLoad[index]);
    };    
  };

  

}
