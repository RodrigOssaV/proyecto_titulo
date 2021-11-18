import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label, Color } from "ng2-charts";
import { SupplierService } from "src/app/service/supplier/supplier.service";

@Component({
  selector: 'app-graphic-supplier',
  templateUrl: './graphic-supplier.component.html',
  styleUrls: ['./graphic-supplier.component.css']
})
export class GraphicSupplierComponent implements OnInit {

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
        align: 'end'
      },
    }  
  };
  public barChartLabels: Label[] = ['Proveedores'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  // datos que vamos a cargar en las graficas
  public barChartData: ChartDataSets[] = [];
  public barChartColors: Color[] = [];

  listDrivers:any = [];
  private dato: any;
  private datos: any = [];
  private name:any = [];

  listSupplier:any = [];

  constructor(private apiSupplier: SupplierService) { }

  ngOnInit(): void {
    this.getDatosProveedor();
  }

  getDatosProveedor(){
    this.apiSupplier.get_suppliers().subscribe(
      res => {
        this.listSupplier = res;
        for (const supplier of this.listSupplier){
          this.dato = supplier.total_amount;
          this.datos.push(this.dato);
          this.name.push(supplier.name_supplier);
        };
        this.cargarDatos(this.datos, this.name);
      },
      (err) => {
        console.log(err);
      }
    );    
  }

  cargarDatos(datos:any, name:any){
    this.barChartData = [];
    for(const index in datos){
      this.barChartData.push({ data: [datos[index]], label: name[index]});
    };
  }

}
