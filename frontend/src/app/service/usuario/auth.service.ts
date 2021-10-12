import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { }

  inicioSessionUser(data: { nickname: string; password: string; }) {
    return this.http.post<any>(this.URL+'/login', data);
  }

  registroUser(data: { nickname: string; password: string; }){
    return this.http.post<any>(this.URL+'/register', data);
  }

  usuarioLogueado() {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }
}
