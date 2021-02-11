import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserI} from '../../../models/user.interface';
import {FormGroup, FormControl, Validators} from '@angular/forms'; 
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string;

  constructor(private authService: AuthService, private route: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)      
  });

  ngOnInit(): void {
  }

  async onLogin(form : UserI){
    
    try{
      await this.authService.loginServerToken(form);
      if (this.authService.getToken())
      {
        
        this.route.navigate([this.authService.getURL()]);
      }
    }
    catch(error){
      console.log('Error', error);
      this.message = 'Invalid User or wrong password';
    }
  }

  async onGoogleLogin()
  {
    try{
      const user = await this.authService.loginGoogle(); 
      if (user){
        this.route.navigate(['/home']);
      }
      
    }
    catch(error){
      console.log('Error', error);
      this.message = 'Invalid User or wrong password';
    }
  }
}
