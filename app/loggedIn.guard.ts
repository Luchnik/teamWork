import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate} from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(
    private auth: AuthService
  ) {}

  canActivate(): boolean {
    return this.auth.isLoggedIn();
  }
}