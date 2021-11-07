import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/service/usuario/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    /* this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    } */
  }

  toggleBurger(){
    var burgerIcon = document.querySelector('.burger')
    var dropMenu = document.querySelector('.navMenu')
    burgerIcon?.classList.toggle('is-active')
    dropMenu?.classList.toggle('is-active')    
  }

}
