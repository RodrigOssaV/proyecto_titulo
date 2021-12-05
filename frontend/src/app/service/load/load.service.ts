import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URIs } from "../../../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  turnLoad = new BehaviorSubject<boolean>(false);
  loadList = this.turnLoad.asObservable();

  constructor(private http: HttpClient) { }

  get_loads(){
    return this.http.get(URIs.api+'/get_loads').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  add_load(data:any){
    return this.http.post(URIs.api+'/add_load', data).pipe(
      map((res:any) => {
        this.turnLoad.next(true);
        return res;
      },
      (err: any) => {
        return err;
      })
    );
  }

  get_load(rut:any){
    return this.http.get(URIs.api+`/get_load/${rut}`).pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  get_sum_loads(){
    return this.http.get(URIs.api+'/get_sum_loads').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  get_loads_today(rut:any){
    return this.http.get(URIs.api+`/get_loads_today/${rut}`).pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  get_loads_lastweeks(rut:any){
    return this.http.get(URIs.api+`/get_loads_lastweeks/${rut}`).pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  get_loads_final(rut:any){
    return this.http.get(URIs.api+`/get_loads_final/${rut}`).pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  get_loads_monthly(rut:any){
    return this.http.get(URIs.api+`/get_loads_monthly/${rut}`).pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  get_total_driver(rut:any){
    return this.http.get(URIs.api+`/get_total_driver/${rut}`).pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  search_between_dates(dates:any){
    return  this.http.post(URIs.api+'/search_between_dates', dates).pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

}
