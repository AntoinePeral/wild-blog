import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { deepContainsValue } from '../helpers/utils';
import { NotifcationService } from '../services/notifcation.service';



export const roleGuard: (expectedRole: string) => CanActivateFn = (expectedRole) => () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const userRoles = authService.getUserRole();
  const notification = inject(NotifcationService)

  if (authService.isLoggedIn() && deepContainsValue(userRoles, expectedRole)) {
    return true;
  } else {
    notification.showError('Accès non autorisé. Redirection vers la home page.');
    router.navigate(['/login']);
    return false;
  }
};