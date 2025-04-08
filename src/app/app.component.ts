import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  messageToChild: string ='Bonjour depuis le parent';

    private authService = inject(AuthService);
    private router = inject(Router);

    ngOnInit(): void {
    }
 
  isLogged(){
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  isUser(){
    const role = this.authService.getUserRole()
    return this.deepContainsValue(role, 'ROLE_USER')? true: false;
  }

  isAdmin(){
    const role = this.authService.getUserRole();
    return this.deepContainsValue(role, 'ROLE_ADMIN')? true : false;
  }

  deepContainsValue(data: any, value: string | number): boolean {
    if (data === value) return true;
  
    if (Array.isArray(data)) {
      return data.some(item => this.deepContainsValue(item, value));
    }
  
    if (typeof data === 'object' && data !== null) {
      return Object.values(data).some(val => this.deepContainsValue(val, value));
    }
  
    return false;
  }

  logout(){
    this.authService.logout();
  }

}
