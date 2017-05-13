import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [`
    div.container {
      text-align: center;
    }
    .logo {
      font-family: Verdana, sans-serif;
      font-size: 24px;
      margin-right: 30px;
    }
    span.projects a {
      margin-left: 10px;
      text-decoration: none;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 5px;
      font-family: Verdana, sans-serif;
      font-size: 14px;
      padding: 7px;
    }
    span.projects a:hover {
      background-color: #fff;
      text-decoration: none;
      color: #000;
    }
    div.username {
      margin-left: auto;
      margin-right: 0;
    }
    div.username span {
      font-family: Verdana, sans-serif;
      font-size: 14px;
      color: #fff;
      margin-left: 10px;
      margin-right: 10px;
    }
    div.username a {
      margin-left: 10px;
      text-decoration: none;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 5px;
      font-family: Verdana, sans-serif;
      font-size: 14px;
      padding: 7px;
    }
    div.username a:hover {
      background-color: #fff;
      text-decoration: none;
      color: #000;
    }
    img {
      border-radius: 50%;
      margin-right: 15px;
    }
  `]
})
export class AppComponent implements OnInit {
  user;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.currentUser.subscribe(user => this.user = user);
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
    return false;
  }
}