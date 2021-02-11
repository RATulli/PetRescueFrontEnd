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


  constructor(private authService: AuthService,
              private router: Router){
      

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let url: string =state.url;
      return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
      console.log('IsLoggedIn:' + this.authService.getToken());
  
      if (this.authService.getToken())
        return true;
  
      // Store the attempted URL for redirecting
      this.authService.setURL(url);
  
      // Navigate to the login page with extras
      this.router.navigate(['/login']);
      
      return false;
    }
  } 


    /* 
    checkLogin(url:String): boolean {
    console.log('IsLoggedIn:'+ this.authService.getToken());
    if (this.authService.getToken())
       {  
         console.log("Hay token", this.authService.getToken());
         return true;
       }

    console.log("URL",url.toString());
    this.authService.setURL(url.toString()); 
    console.log("No Hay token", this.authService.getToken());
    this.router.navigate(['/login']);
    return false;
      }
    */
      
  
  

