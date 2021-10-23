import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../service/usuario/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userTemplate = {
    nickname: '',
    password: '',
  };

  constructor(private authServices: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  inicioSesion(){
    this.authServices.inicioSessionUser(this.userTemplate).subscribe(
      res => {
        /* console.log(res); */
        localStorage.setItem('token', res.token);
        this.router.navigate(['/Dashboard']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
