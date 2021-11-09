import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

const TOKEN_KEY = 'accessToken';
const USER_KEY = 'username';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_API = 'http://localhost:3000/api/auth'
  turnLoad = new BehaviorSubject<boolean>(false);
  loadList = this.turnLoad.asObservable();

  constructor(private http: HttpClient, private router: Router){}

  inicioSessionUser(data: {username: string, password: string}){
    return this.http.post<any>(this.AUTH_API+'/signin', data);
  }

  registroUser(data: {username: string, email: string, password: string}){
    return this.http.post<any>(this.AUTH_API+'/signup', data).pipe(
      map((res:any) => {
        this.turnLoad.next(true);
        return res;
      },
      (err:any) => {
        return err;
      })
    );;
  }

  usuarioLogueado(){
    return !!localStorage.getItem(TOKEN_KEY);
  }

  saveToken(token: string):void{
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken():string | null{
    return localStorage.getItem(TOKEN_KEY);
  }

  saveUser(user:any):void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser():any{
    const user = localStorage.getItem(USER_KEY);
    if(user){
      return JSON.parse(user);
    }
  }

  logout(){
    localStorage.removeItem(TOKEN_KEY);
    this.router.navigate(['/Login']);
  }
}
