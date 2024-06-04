import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
  }

  get isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}
