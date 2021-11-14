import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets, } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
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
    },
    plugins: {
      title: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'horizontalBar';

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
    this.finance.get_all_finances().subscribe(
      res => {
        this.listFinances = res;
        /* console.log(this.listFinances) */
        for(const finance_ of this.listFinances){
          this.dato = finance_.benefitEmpresa;
          this.datos.push(this.dato);
          this.name.push(finance_.id_supplier);
        }
        /* console.log(this.barChartData) // first barChartData
        console.log(this.datos) */
        this.cargarDatos(this.datos, this.name);
      },
      (err) => {
        console.log(err);
      }      
    );
  }

  cargarDatos(datos:any, name:any){
    this.barChartData = [];
    this.barChartLabels = [];
    this.barChartData.push({data: datos , label: 'Benefit Empresa'});    
    for(const index in datos){
      this.barChartLabels.push(name[index]);
    };
  }

}