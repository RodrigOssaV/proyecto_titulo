import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  userTemplate = {
    username: '',
    password: '',
    roles: [],
  }
  constructor() { }

  ngOnInit(): void {
  }

  registroUsuario(form:any){
    console.log(form.value);
  }

  launchModal(){
    const modal = document.querySelector('.modal');
    modal?.classList.toggle('is-active');
  }

}
