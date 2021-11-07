import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../service/usuario/auth.service";
import { TokenInterceptorService } from "src/app/service/usuario/token-interceptor.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userTemplate = {
    username: '',
    password: '',
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authServices: AuthService, private tokenStorage: TokenInterceptorService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  inicioSesion(){
    this.authServices.login(this.userTemplate.username, this.userTemplate.password).subscribe(
      res => {
        this.tokenStorage.saveToken(res.accessToken)
        this.tokenStorage.saveUser(res)

        this.isLoginFailed = false
        this.isLoggedIn = true
        this.roles = this.tokenStorage.getUser().roles
        this.router.navigate(['/Dashboard']);
      },
      err => {
        console.log(err);
        this.isLoginFailed = true;
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }

}
