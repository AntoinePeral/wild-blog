import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { deepContainsValue } from '../helpers/utils';



export const roleGuard: (expectedRole: string) => CanActivateFn = (expectedRole) => () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const userRoles = authService.getUserRole();

  if (authService.isLoggedIn() && deepContainsValue(userRoles, expectedRole)) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};