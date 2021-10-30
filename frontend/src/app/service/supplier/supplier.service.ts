import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URIs } from "../../../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  turnLoad = new BehaviorSubject<boolean>(false);
  loadList = this.turnLoad.asObservable();

  constructor(private http: HttpClient) { }

  add_supplier(data:any){
    return this.http.post(URIs.api+'/add_supplier', data).pipe(
      map((res:any) => {
        this.turnLoad.next(true);
        return res
      },
      (err:any) => {
        return err
      })
    );
  }

  get_suppliers(){
    return this.http.get(URIs.api+'/get_suppliers').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  /* update_supplier(rut:any, driver:any){
    return this.http.put(URIs.api+`/update_driver/${rut}`, driver).pipe(
      map((res:any)=>{
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  } */

  /* delete_supplier(rut:any){
    return this.http.delete(URIs.api+`/delete_driver/${rut}`).pipe(
      map((res:any)=>{
        this.turnLoad.next(true);
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  } */

  best_supplier(){
    return this.http.get(URIs.api+'/best_supplier').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

}
