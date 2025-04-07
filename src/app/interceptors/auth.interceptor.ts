import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

    // Supprime le token s’il est invalide ou expiré
    authService.verifyToken();

    const token = authService.getToken();

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }

  return next(req);
};
// solution valide ---------------------------




// -------------------- Seconde solution mais il faut supprimer les appels api de la homepage pour y accéder --> api.service.ts
  // if (!authService.isLoggedIn()) {
  //   router.navigate(['/login'])
  //   return next(req)
  // }

  // authService.isLoggedIn();

  // const token = authService.getToken();
  // console.log(token)
  // const authReq = req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });


  // return next(authReq);