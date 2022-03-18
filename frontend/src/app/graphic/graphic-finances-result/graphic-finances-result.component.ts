import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets} from 'chart.js';

import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-finances-result',
  templateUrl: './graphic-finances-result.component.html',
  styleUrls: ['./graphic-finances-result.component.css']
})
export class GraphicFinancesResultComponent implements OnInit {

  public barChartType: ChartType = 'horizontalBar';
  public barChartData: ChartDataSets[] = [
    { data: [708, 612, 96, 55,138], label: 'Total'},
  ];
  public barChartLabels: string[] = ['Total', 'Entregado', 'No entregado', 'Repartidores', 'Empresa'];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { 
      xAxes: [{
        ticks: {
          beginAtZero: true,
        } 
      }],
      yAxes: [{
        stacked: true
      }]
    },
  };
  public barChartLegend = false;

  list_benefits: any;
  private dato: any;
  private datos: any = [];
  private dato_supplier: any;
  private datos_suppliers: any = [];
  private dato_amount: any;
  private datos_amounts: any = [];
  private dato_delivery: any;
  private datos_deliverys: any = [];
  private dato_notdelivery: any;
  private datos_notdeliverys: any = [];

  constructor(private finance: FinancesService) { }

  ngOnInit(): void {
    this.loadResult();
  }

  loadResult(){
    this.finance.get_global_benefits().subscribe(
      res => {
        this.list_benefits = res;
        /* console.log(this.list_benefits); */
        for(const benefit of this.list_benefits){
          this.dato = benefit.benefits_drivers;
          this.datos.push(this.dato);
          this.dato_supplier = benefit.benefits_empresa;
          this.datos_suppliers.push(this.dato_supplier);
          this.dato_amount = benefit.total_amount;
          this.datos_amounts.push(this.dato_amount);          
        }
        /* this.cargarDatos(this.datos, this.datos_suppliers, this.datos_amounts); */
        /* this.cargarDatosLoad(this.datos_amounts); */
      }, (err) => {
        console.log(err);
      }
    );
  }

  

  
  cargarDatos(drivers:any, suppliers:any, loads:any/* deli: any, notdeli:any */){
    this.barChartData = [];
    this.barChartData.push({
      data: drivers,
      label: 'Beneficios repartidores',
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)',
    });
    this.barChartData.push({
      data: suppliers,
      label: 'Beneficios empresa',
      backgroundColor: 'rgba(255, 153, 153, 0.2)', 
      borderColor: 'rgb(255, 153, 153)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgb(255, 153, 153, 0.2)',
    });
    this.barChartData.push({
      data: loads,
      label: 'Total encomiendas',
      backgroundColor: 'rgba(159, 140, 30, 0.2)', 
      borderColor: 'rgba(159, 140, 30)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgba(159, 140, 30, 0.2)',
    });
    /* this.barChartData.push({
      data: deli,
      label: 'Total delivery',
      backgroundColor: 'rgba(255, 153, 153, 0.2)', 
      borderColor: 'rgb(255, 153, 153)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgb(255, 153, 153, 0.2)',
    });
    this.barChartData.push({
      data: notdeli,
      label: 'Total not delivery',
      backgroundColor: 'rgba(255, 153, 153, 0.2)', 
      borderColor: 'rgb(255, 153, 153)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgb(255, 153, 153, 0.2)',
    }); */
  }

  cargarDatosLoad(loads:any){
    this.barChartData.push({
      data: loads,
      label: 'Total encomiendas',
      backgroundColor: 'rgba(255, 159, 64, 0.2)', 
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
      fill: true,
      hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)',
    });
  }
}
