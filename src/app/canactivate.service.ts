import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AppService } from "./app.service";

@Injectable({
  providedIn: 'root'
})

export class ActivateHome implements CanActivate {
  constructor(private appService: AppService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.appService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}