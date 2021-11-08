import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "src/app/service/usuario/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username?: string;

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this._authService.getToken();

    if (this.isLoggedIn) {
      this.router.navigate(['/Dashboard']);
    }    
  }

}
