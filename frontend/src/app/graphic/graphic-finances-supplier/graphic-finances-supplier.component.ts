import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets, } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-finances-supplier',
  templateUrl: './graphic-finances-supplier.component.html',
  styleUrls: ['./graphic-finances-supplier.component.css']
})
export class GraphicFinancesSupplierComponent implements OnInit {

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
    },/* 
    plugins: {
      legend: false
    },
    title: {
      display: true,
      text: 'Results'
    }, */
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartColors: Color[] = [/* {backgroundColor:['rgba(75, 192, 192, 0.2)']} */]

  listFinances:any = [];
  private dato: any; /* Dato a cargar */
  private datos: any = []; /* array datos */
  private name:any = [];

  constructor(private finance: FinancesService) { }

  ngOnInit(): void {
    this.getDato();
  }

  getDato(){
    this.finance.get_all_finances_supplier().subscribe(
      res => {
        this.datos = [];
        this.name = [];
        this.listFinances = res;
        console.log(this.listFinances);
        for(const finance_ of this.listFinances){
          this.dato = finance_.benefit_empresa;
          this.datos.push(this.dato);
          this.name.push(finance_.razon_social);
        }
        this.cargarDatos(this.datos, this.name, /* this.costos */);
      },
      (err) => {
        console.log(err);
      }      
    );
  }

  benefit_driver(){
    this.finance.get_all_finances_driver().subscribe(
      res => {
        this.datos = [];
        this.name = [];
        this.listFinances = res;
        console.log(this.listFinances);
        for(const finance_ of this.listFinances){
          this.dato = finance_.benefit_driver;
          this.datos.push(this.dato);
          this.name.push(finance_.run);
        }
        this.cargarDatosDriver(this.name, this.datos);
      },
      (err) => {
        console.log(err);
      }      
    );
    
  }

  cargarDatos(datos:any, name:any, /* costs:any */){
    this.barChartData = [];
    this.barChartLabels = [];
    this.barChartData.push({
      data: datos,
      label: 'Benefits',
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)',
    });
    /* this.barChartData.push({
      data: datos,
      label: 'Cost empresa',
      type: 'line',
      borderColor: 'rgb(75, 192, 192)',
      fill: false 
    }); */     
    for(const index in datos){
      this.barChartLabels.push(name[index]);
    };
  }

  cargarDatosDriver(name:any, datos:any){
    this.barChartData = [];
    this.barChartLabels = [];
    this.barChartData.push({
      data: datos,
      label: 'Benefits',
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)',
    });
    /* this.barChartData.push({
      data: datos,
      label: 'Cost empresa',
      type: 'line',
      borderColor: 'rgb(75, 192, 192)',
      fill: false 
    }); */     
    for(const index in datos){
      this.barChartLabels.push(name[index]);
    };
  }

}
