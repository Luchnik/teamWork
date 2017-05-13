import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  styles: [`
    span {
      display: inline-block;
      margin-top: 10px;
      font-family: Verdana, sans-serif;
      color: tomato;
      font-size: 18px;
    }
    *::-webkit-input-placeholder {
      color: tomato;
    }
    *:-moz-placeholder {
      color: tomato;
    }
    *::-moz-placeholder {
      color: tomato;
    }
    *:-ms-input-placeholder {
      color: tomato;
    }
  `]
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login({ username, password }) {
    this.auth.login(username, password).subscribe(loggedIn => {
      if (loggedIn) {
        this.router.navigateByUrl('/home');
      }
    });
  }
}