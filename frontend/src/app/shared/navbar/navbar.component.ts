import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/usuario/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    
  }

  toggleBurger(){
    var burgerIcon = document.querySelector('.burger')
    var dropMenu = document.querySelector('.navbar-link')
    burgerIcon?.addEventListener('click', () => {
      burgerIcon?.classList.toggle('is-active')
      dropMenu?.classList.toggle('is-active')
    })    
  }

}
