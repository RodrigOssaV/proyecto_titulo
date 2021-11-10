import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URIs } from "../../../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  turnLoad = new BehaviorSubject<boolean>(false);
  loadList = this.turnLoad.asObservable();

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(URIs.api+'/auth/get_users').pipe(
      map((res:any) => {
        return res;
      },
      (err:any) => {
        return err;
      })
    );
  }

}
