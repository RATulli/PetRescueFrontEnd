import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserI} from '../../../models/user.interface';
import {FormGroup, FormControl, Validators} from '@angular/forms'; 
import {Router} from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string;
  public hide:boolean = true;

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
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Welcome '+form.displayName + '!',
          showConfirmButton: false,
          timer: 2500
        })
        

      }
    }
    catch(error){
      // this.message = 'Invalid User or wrong password';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid User or Wrong PassWord!'
      })
    }
  }

  async onGoogleLogin()
  {
    try{
      await this.authService.loginGoogle(); 
      if (this.authService.getToken()){
        this.route.navigate(['/home']);
      }
      
    }
    catch(error){
      console.log('Error', error);
      this.message = 'Invalid User or wrong password';
    }
  }
}
