import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthService } from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private _authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const token = this._authService.getToken();

    let request = req;

    if(token){
      request = req.clone({
        setHeaders: {
          authorization: `${token}`
        }
      });
    }
    return next.handle(request);
  }

  
}
