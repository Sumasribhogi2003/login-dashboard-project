import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';  // ✅ no default value
  password: string = '';  // ✅ no default value
  error: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'user@example.com' && this.password === 'password123') {
      localStorage.setItem('token', 'dummy-token');
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
