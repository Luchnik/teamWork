import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html',
  styles: [`
    .jumbo {
      min-width: 100%;
    }
    span {
      display: inline-block;
      margin-top: 10px;
      font-family: Verdana, sans-serif;
      color: tomato;
      font-size: 18px;
    }
  `]
})
export class HomeComponent implements OnInit{
  loggedIn: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.currentUser.subscribe(user => {
      this.loggedIn = !!user;
    });
  }
}