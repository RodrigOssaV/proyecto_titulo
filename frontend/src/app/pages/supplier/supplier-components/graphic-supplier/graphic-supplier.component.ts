import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { SupplierService } from "../../../../service/supplier/supplier.service";

@Component({
  selector: 'app-graphic-supplier',
  templateUrl: './graphic-supplier.component.html',
  styleUrls: ['./graphic-supplier.component.css']
})
export class GraphicSupplierComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    }
  };
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    }
  ];
  public pieChartLabels: Label[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartData: number[] = [];

  listSupplier:any = [];

  constructor(private apiSupplier: SupplierService) { }

  ngOnInit(): void {
    this.getDatosProveedor();
  }

  getDatosProveedor(){
    this.apiSupplier.get_suppliers().subscribe(
      res => {
        this.listSupplier = res;
        /* console.log(this.listSupplier); */
        for (const supplier of this.listSupplier){
          this.pieChartData.push(supplier.total_amount);
          this.pieChartLabels.push([supplier.name_supplier]);
        }
      },
      (err) => {
        console.log(err);
      }
    );    
  }

}
