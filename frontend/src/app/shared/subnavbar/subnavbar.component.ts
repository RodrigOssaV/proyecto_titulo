import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/service/usuario/auth.service";

@Component({
  selector: 'app-subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.css']
})
export class SubnavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this._authService.getToken();

    if (this.isLoggedIn) {
      const user = this._authService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  toggleBurger(){
    var burgerIcon = document.querySelector('.burger')
    var dropMenu = document.querySelector('.navMenu')
    burgerIcon?.classList.toggle('is-active')
    dropMenu?.classList.toggle('is-active')    
  }

}
