import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/service/usuario/auth.service";

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})
export class FinancesComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username?: string;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this._authService.getToken();
    
    if (this.isLoggedIn) {
      const user = this._authService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMINISTRADOR');
      this.showModeratorBoard = this.roles.includes('ROLE_SUPERVISOR');
      this.showUserBoard = this.roles.includes('ROLE_MODERADOR');

      this.username = user.username;
    }    
  }

}
