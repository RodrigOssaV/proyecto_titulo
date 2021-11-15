import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { DriverService } from "../../../../service/driver/driver.service";

@Component({
  selector: 'app-graphic-driver',
  templateUrl: './graphic-driver.component.html',
  styleUrls: ['./graphic-driver.component.css']
})
export class GraphicDriverComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: { 
      xAxes: [{
        ticks: {
          beginAtZero: true
        } 
      }],
      yAxes: [{}]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      },
    }  
  };
  public barChartLabels: Label[] = ['Conductores'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  // datos que vamos a cargar en las graficas
  public barChartData: ChartDataSets[] = [];

  listDrivers:any = [];
  private dato: any;
  private datos: any = [];
  private name:any = [];
  
  constructor(private apiDriver: DriverService) { }

  ngOnInit(): void {
    this.getDato();
  }

  getDato(){
    this.apiDriver.get_drivers().subscribe(
      res => {
        this.listDrivers = res;
        for (const driver of this.listDrivers) {
          this.dato = driver.total_load;
          this.datos.push(this.dato);
          this.name.push(driver.name);
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
