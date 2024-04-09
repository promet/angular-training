import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn = false;

  login(username: string, password: string): boolean {
    // Implement your authentication logic here, e.g., calling an API
    if (username === 'Testing' && password === 'Testing') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
