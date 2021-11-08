import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/usuario/auth.service';


@Component({
  selector: 'app-status-load',
  templateUrl: './status-load.component.html',
  styleUrls: ['./status-load.component.css']
})
export class StatusLoadComponent implements OnInit {

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

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }    
  }

}
