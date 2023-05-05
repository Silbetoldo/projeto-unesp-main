import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  username: string = '';
  password: string = '';

  login() {
    if (this.username === 'usuario' && this.password === 'senha') {
      alert('Login bem-sucedido!');
    } else {
      alert('Usuário ou senha inválido!');
    }
  }

}
