import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionserviceService } from '../services/sessionservice.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerGuardGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (SessionserviceService.isThereAPlayer()) {
        return true;
    }

    this.router.navigate(['enterid']);
    return false;

  }
  
}
