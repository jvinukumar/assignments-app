import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot , Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService implements CanActivate {
    
    constructor(private router: Router) {}
   
    isAuthenticated: boolean;
   
    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.checkLogin();
    }

    checkLogin(): boolean {
        if (this.isAuthenticated === true) {
          return true;
        }
        this.router.navigate(['authpage']);
        return false;
    }

    authenticateUser(user: any) {
        if(user.emailId === 'vinod@gmail.com' && user.password === 'admin'){
            this.isAuthenticated = true;
            this.router.navigate(['app']);
        } else {
            this.isAuthenticated = false;
        }
    }
    
}