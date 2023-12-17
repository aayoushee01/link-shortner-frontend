import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'link-shortner';
  constructor(private authService: AuthService) {}
  isLogin = this.authService.isLoggedIn();
  logout(): void {
    this.authService.logout();
  }
  login(): void {
    this.authService.login();
  }
}
