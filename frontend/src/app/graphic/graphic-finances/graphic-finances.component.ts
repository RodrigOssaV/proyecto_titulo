import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-finances',
  templateUrl: './graphic-finances.component.html',
  styleUrls: ['./graphic-finances.component.css']
})
export class GraphicFinancesComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Profit', 'Losings'];  
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnytChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
    cutoutPercentage: 90   
  }
  public doughnutChartColors: Color[] = [
    {
      // TODO ver tema colores velocimetro de encomiendas
      backgroundColor: ['rgba(40, 180, 99)','rgba(231, 76, 60, 0.8)'],
    },
  ];
  valueEmpresa:any = [];
  valueDriver:any = [];
  private dato: any;
  private datos: any = [];
  valueTotal = 0;

  constructor(private financeService: FinancesService) { }

  ngOnInit(): void {
    this.getBenefitEmpresa();
    this.getBenefitDriver();
  }

  getBenefitEmpresa(){
    this.financeService.get_total_benefit_supplier().subscribe(
      res => {
        this.valueEmpresa = res;
        this.dato = this.valueEmpresa.total_benefit_supplier;
        this.datos.push(this.dato);
      },
      (err) => {
        console.log(err);
      } 
    )
  }

  getBenefitDriver(){
    this.financeService.get_total_benefit_driver().subscribe(
      res => {
        this.valueDriver = res;
        this.dato = this.valueDriver.total_benefit_driver;
        this.datos.push(this.dato);
        this.cargarDatos(this.datos);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  cargarDatos(datos:any){
    this.doughnutChartData = [];
    for(const index of datos){
      this.doughnutChartData.push(index);
    };
    this.valueTotal = this.datos[0]-this.datos[1];
  }

}
