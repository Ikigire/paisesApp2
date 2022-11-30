import { Injectable } from '@angular/core'
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, RouterStateSnapshot, UrlTree, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs'
import { LoginService } from '../services/login.service';
import { User } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanLoad, CanActivate {
    constructor(
        private loginService: LoginService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let userLogged: User = this.loginService.getLoggedUser();
        if (userLogged.email.trim() == ""){
            this.router.navigateByUrl("/login");
            // this.router.navigateByUrl("/login?"" + route.root);
            return false;
        }
        else
            return true;
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        let userLogged: User = this.loginService.getLoggedUser();
        if (userLogged.email.trim() == ""){
            this.router.navigateByUrl("/login");
            // this.router.navigateByUrl("/login?" + route.path);
            return false;
        }
        else
            return true;
    }
}