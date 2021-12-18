import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URIs } from "../../../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  turnLoad = new BehaviorSubject<boolean>(false);
  loadList = this.turnLoad.asObservable();

  constructor(private http: HttpClient) { }

  add_driver(data:any){
    return this.http.post(URIs.api+'/add_driver', data).pipe(
      map((res:any) => {
        this.turnLoad.next(true);
        return res
      },
      (err:any) => {
        return err
      })
    );
  }

  get_driver(rut:any){
    return this.http.get(URIs.api+`/get_driver/${rut}`).pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  get_drivers(){
    return this.http.get(URIs.api+'/get_drivers').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  update_driver(rut:any, driver:any){
    return this.http.put(URIs.api+`/update_driver/${rut}`, driver).pipe(
      map((res:any)=>{
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  delete_driver(rut:any){
    return this.http.delete(URIs.api+`/delete_driver/${rut}`).pipe(
      map((res:any)=>{
        this.turnLoad.next(true);
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  best_driver(){
    return this.http.get(URIs.api+'/best_driver').pipe(
      map((res:any)=>{
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  top_drivers(){
    return this.http.get(URIs.api+'/top_drivers').pipe(
      map((res:any)=>{
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }
  
  import_drivers(data:any){
    return this.http.post(URIs.api+'/import_drivers', data).pipe(
      map((res:any) => {
        this.turnLoad.next(true);
        return res
      },
      (err:any) => {
        return err
      })
    );
  }
}
