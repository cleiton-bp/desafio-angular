import { Component } from '@angular/core';
import { LoginService } from '../../services/loginService';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userInvalid = "usuário Inválido";
  model: { email: string; password: string; };

  constructor(private loginService: LoginService) {
    this.model = { email: '', password: '' };
  }

  onSubmit() {
    this.loginService.login(this.model).subscribe(
      data => {
        window.location.href='/home'
      },
      error => {
        alert("usuário Inválido")
      }
    );
  }
}