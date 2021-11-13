import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets} from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { FinancesService } from "src/app/service/finances/finances.service";

@Component({
  selector: 'app-graphic-finances-supplier',
  templateUrl: './graphic-finances-supplier.component.html',
  styleUrls: ['./graphic-finances-supplier.component.css']
})
export class GraphicFinancesSupplierComponent implements OnInit {

  public barChartData: ChartDataSets[] = [{ data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }];

  public barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: { xAxes:[{}], yAxes:[{}] },
  };
  public barChartType: ChartType = 'horizontalBar';

  public barChartLegend = true;

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
        console.log(this.listFinances)
        /* for(const finance_ of this.listFinances){
          this.dato = finance_.benefitEmpresa.split(',');
          this.dato = finance_.benefitEmpresa;
          this.datos.push(this.dato);          
          this.name.push(finance_.id)
        } */
        /* console.log(this.datos, this.name); */
        /* this.cargarDatos(this.datos, this.name); */
      },
      (err) => {
        console.log(err);
      }      
    );
  }

  cargarDatos(datos:any, name:any){
    this.barChartData = [{data: []}];
    for(const index in datos){
      this.barChartData.push({ data: [datos[index]], label: 'prueba' });
      this.barChartLabels.push()
      console.log(this.barChartData)
    };
    
  }

}
