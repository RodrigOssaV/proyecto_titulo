import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/service/usuario/auth.service";
import { UserService } from 'src/app/service/usuario/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users:any;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.authService.loadList.subscribe(isLoaded => {
      if(isLoaded === true){
        this.loadUsers();
      }
    })
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res;
      }
    )
  }

}
