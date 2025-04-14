import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { deepContainsValue } from '../../helpers/utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  
  isLogged(){
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  isUser(){
    const role = this.authService.getUserRole()
    return deepContainsValue(role, 'ROLE_USER')? true: false;
  }

  isAdmin(){
    const role = this.authService.getUserRole();
    return deepContainsValue(role, 'ROLE_ADMIN')? true : false;
  }

  logout(){
    this.authService.logout();
  }
}
