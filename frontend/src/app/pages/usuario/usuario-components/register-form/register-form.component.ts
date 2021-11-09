import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/service/usuario/auth.service";
import { NotificationService } from "src/app/service/component/notification.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  userTemplate = {
    username: '',
    email: '',
    password: '',
    roles: ''
  }

  typeRole = [
    {id:"1", role:"admin"}, {id:"2", role:"moderator"}, {id:"3", role:"user"}
  ]


  constructor(private authService: AuthService, private notifyService: NotificationService) { }

  ngOnInit(): void {    
  }

  signInUser(form:any){
    this.authService.registroUser(form.value).subscribe(
      res => {
        this.notifyService.showSuccess("Usuario agregado","Notificación");
        form.reset();
        this.launchModal();
      },
      err => {
        console.log(err);
      }
    )
  }

  launchModal(){
    const modal = document.querySelector('.modal');
    modal?.classList.toggle('is-active');
  }

}
