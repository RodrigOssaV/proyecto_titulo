import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../service/usuario/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(){
    if(1===1){
      return true;
    }
    this.router.navigate(['/Login']);
    return false;
  }
    
}
