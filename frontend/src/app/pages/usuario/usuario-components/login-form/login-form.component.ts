import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../service/usuario/auth.service";
import { Router } from "@angular/router";
import { NotificationService } from "src/app/service/component/notification.service";

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

  constructor(
    private authServices: AuthService, 
    private router: Router, 
    private notifyService: NotificationService
    ) { }

  ngOnInit(): void {
  }

  inicioSesion(){
    this.authServices.inicioSessionUser(this.userTemplate).subscribe(
      res => {
        localStorage.setItem('accessToken', res.accessToken)
        this.authServices.saveToken(res.accessToken)
        this.authServices.saveUser(res)

        this.isLoginFailed = false
        this.isLoggedIn = true
        this.roles = this.authServices.getUser().roles
        this.router.navigate(['/Dashboard']);
      },
      err => {
        console.log(err);
        this.notifyService.showError('Error', 'Error login');
        this.isLoginFailed = true;
      }
    )
  }

}
