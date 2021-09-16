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
}
