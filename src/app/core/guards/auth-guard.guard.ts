import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)
  const authService = inject(AuthService)

  return authService.isAuntenticated().pipe(
    map((isAuth) => {
      if(isAuth) return true;
      return router.createUrlTree(['/auth/login'])
    })
  )
};
