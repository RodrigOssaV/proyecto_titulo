import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URIs } from "../../../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  turnLoad = new BehaviorSubject<boolean>(false);
  loadList = this.turnLoad.asObservable();

  constructor(private http: HttpClient) { }

  get_statusloads(){
    return this.http.get(URIs.api+'/get_statusloads').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

  update_status(id_status:any, statusload: any){
    return this.http.put(URIs.api+`/update_statusload/${id_status}`, statusload).pipe(
      map((res:any)=>{
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }
}
