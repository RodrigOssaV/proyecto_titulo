import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_API = 'http://localhost:3000/api/auth'

  constructor(private http: HttpClient, private router: Router){}

  inicioSessionUser(data: {username: string, password: string}){
    return this.http.post<any>(this.AUTH_API+'/signin', data);
  }

  registroUser(data: {username: string, email: string, password: string}){
    return this.http.post<any>(this.AUTH_API+'/signup', data);
  }

  usuarioLogueado(){
    return !!localStorage.getItem('accessToken')
  }

  getToken(){
    return localStorage.getItem('accessToken')
  }

  logout(){
    localStorage.removeItem('accessToken')
    this.router.navigate(['/Login'])
  }


}
