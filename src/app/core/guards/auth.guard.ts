import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../../shared/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private service: AuthService, private router: Router, private aRoute: ActivatedRoute) { }

  canActivate(
    route: ActivatedRouteSnapshot, // eslint-disable-line
    state: RouterStateSnapshot // eslint-disable-line
  ): Observable<boolean> | boolean{
    return this.service.isLoggedIn$.pipe(
      map(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['../login/signin'], { relativeTo: this.aRoute });
          return false;
        }
        return true;
      })
    );
  }
}
