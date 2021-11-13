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

  add_finances(data:any){
    return this.http.post(URIs.api+'/add_finances', data).pipe(
      map((res:any) => {
        this.turnLoad.next(true);
        return res
      },
      (err:any) => {
        return err
      })
    );
  }

  get_all_finances(){
    return this.http.get(URIs.api+'/get_all_finances').pipe(
      map((res:any) => {
        return res
      },
      (err:any) => {
        return err
      })
    );
  }
}
