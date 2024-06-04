import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthServiceService) { }

  login(username: string, password: string) {

    if (this.authService.login(username, password)) {

    } else {
      // Login failed
    }
  }

  cerrarSession() {
    this.authService.logout();
  }
}
