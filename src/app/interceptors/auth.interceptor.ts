import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { NotifcationService } from '../services/notifcation.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const notification = inject(NotifcationService)

  // Supprime le token s’il est invalide ou expiré
  authService.verifyToken();
  let authReq = req;

  if(req.url.startsWith('http://localhost:8080')){
    const token = authService.getToken();
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }
  
  return next(authReq).pipe(
    catchError(error => {
      if(error.status === 401 || error.status === 403){
        notification.showError('Session expirée ou accès non autorisé. Redirection vers la page de connexion.');
        router.navigate(['/login']);
      }
      return throwError(()=> error)
    })
  )

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