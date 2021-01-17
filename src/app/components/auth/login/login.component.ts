import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserI} from '../../../models/user.interface';
import {FormGroup, FormControl, Validators} from '@angular/forms'; 
import {Router} from '@angular/router';
import { FirebaseApp } from '@angular/fire';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string;
  public token: string;

  constructor(private authService: AuthService, private route: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)      
  });

  ngOnInit(): void {
  }

  async onLogin(form : UserI){
    
    try{
      const user = await this.authService.loginByEmail(form);
      if (user){
        this.route.navigate(['/home']);
      }
      
    }
    catch(error){
      console.log('Error', error);
      this.message = 'Invalid User or wrong password';
    }
  }

  onGoogleLogin()
  {
     this.authService.loginGoogle();
  }

}
