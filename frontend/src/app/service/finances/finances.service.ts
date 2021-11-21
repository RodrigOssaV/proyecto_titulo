import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URIs } from "../../../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FinancesService {

  turnLoad = new BehaviorSubject<boolean>(false);
  loadList = this.turnLoad.asObservable();

  constructor(private http: HttpClient) { }

  /* FINANCES SUPPLIERS */
  /* -------------------------------------------------------------------- */
  add_finances_supplier(data:any){
    return this.http.post(URIs.api+'/add_finances_supplier', data).pipe(
      map((res:any) => {
        this.turnLoad.next(true);
        return res
      },
      (err:any) => {
        return err
      })
    );
  }

  get_all_finances_supplier(){
    return this.http.get(URIs.api+'/get_all_finances_supplier').pipe(
      map((res:any) => {
        return res
      },
      (err:any) => {
        return err
      })
    );
  }

  get_total_benefit_supplier(){
    return this.http.get(URIs.api+'/get_total_benefit_supplier').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }
  /* -------------------------------------------------------------------- */

  /* FINANCES DRIVERS */
  /* -------------------------------------------------------------------- */
  get_all_finances_driver(){
    return this.http.get(URIs.api+'/get_all_finances_driver').pipe(
      map((res:any) => {
        return res;
      },(error:any) => {
        return error;
      })
    );
  }

  get_total_benefit_driver(){
    return this.http.get(URIs.api+'/get_total_benefit_driver').pipe(
      map((res:any) => {
        return res;
      }, 
      (err:any) => {
        return err;
      })
    );
  }

  results_all_drivers(){
    return this.http.get(URIs.api+'/results_all_drivers').pipe(
      map((res:any)=>{
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  results_drivers_monthly(){
    return this.http.get(URIs.api+'/results_drivers_monthly').pipe(
      map((res:any)=>{
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  results_drivers_by_suppliers(){
    return this.http.get(URIs.api+'/results_drivers_by_suppliers').pipe(
      map((res:any)=>{
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }
}
