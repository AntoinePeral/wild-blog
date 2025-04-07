import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const visitorOnlyGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si l'utilisateur n'est pas connecté, on l'autorise à accéder à la page
  if (!authService.isLoggedIn()) {
    return true;
  } else {
    // Sinon, il est redirigé vers la page d'accueil (ou une autre page de ton choix)
    router.navigate(['/']);
    return false;
  }
};
