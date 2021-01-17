import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService } from '../../services/auth.service';
import {Router} from '@angular/router'; 
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

 private user$: Observable<any>;

  constructor(private authService: AuthService,
              private router: Router){
      this.user$ = authService.userData;

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let url: string =state.url;
      return this.checkLogin(url);
    }
    

  checkLogin(url:String): boolean {
    //console.log('IsLoggedIn:'+ this.authService.getUserName.toString());
    if (this.authService.getToken())
       {
        //this.router.navigate([url]); 
         
         return true;
       }
      else {
        this.router.navigate(['/login']);
        return false;
      }
    
    

  }
  
}
