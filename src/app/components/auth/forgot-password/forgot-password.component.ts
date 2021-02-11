import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})


export class ForgotPasswordComponent {

  userEmail = new FormControl('');
  alert: boolean =false;
  alertType: string;
  message: string='';

  constructor(private authService:AuthService,
              private router: Router) { }
  
  async onReset() 
  {
     try {
           const email = this.userEmail.value;
          
            await this.authService.resetPassword(email).catch(e => {
               console.log(e);
               console.log("Soy una excepcion");
            });
          
           this.message="Please check your email to restore your account";
           this.alertType="success";         
          } 
      catch (error) {
          this.message="Please enter your email correctly";
          this.alertType="warning";    
         }
      finally{
         this.alert = true;

      }
  }
    
closeAlert()
 {
  this.alert = false; 
  if (this.alertType="succes"){
    this.router.navigate(['/login']);
  }
 }
              

}

