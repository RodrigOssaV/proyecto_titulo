import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets} from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { LoadService } from "src/app/service/load/load.service";

@Component({
  selector: 'app-graphic-finances-result',
  templateUrl: './graphic-finances-result.component.html',
  styleUrls: ['./graphic-finances-result.component.css']
})
export class GraphicFinancesResultComponent implements OnInit {

  public barChartType: ChartType = 'horizontalBar';

  public barChartData: ChartDataSets[] = [
    /* {data: [20,30], stack: 'a'}, 
    {data: [10,20], stack: 'a'} */
  ];
  public barChartLabels: Label[] = ['Percent Success', 'Percent Failured','Benefit empresa', 'Benefit drivers'];
  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: false
    },
    title: {
      display: true,
      text: 'Results'
    },
  };
  public barChartLegend = false;
  public barChartColors: Color[] = []

  listload:any;
  totalPorcentageSuccess = 0;
  totalPorcentageFailured = 0;
  private dato:any;
  private datos:any = [];

  constructor(private loadService: LoadService) { }

  ngOnInit(): void {
    this.loadResult();
  }

  loadResult(){
    this.loadService.get_sum_loads().subscribe(
      res => {
        this.listload = res;
        for(const load of this.listload){
          this.totalPorcentageSuccess = Math.round((((load.sumDeliverys)/(load.sumLoads))*100));
          this.totalPorcentageFailured = Math.round((((load.sumNotDelivery)/(load.sumLoads))*100));
          /* console.log(this.datos); */
          /* this.cargarDatos(this.datos); */
        }
      }, (err) => {
        console.log(err);
      }
    );
  }

  cargarDatos(datos:any){
    this.barChartData = [];
    for(const index in datos){
      this.barChartData.push({ data: datos[index], stack: 'a'});
    };
  }

}
