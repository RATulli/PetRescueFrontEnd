import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserI } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  alert: boolean =false;
  alertType: string;
  message: string='';

  constructor( private router: Router, private authService: AuthService) { }

    registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)   
   
  });

  ngOnInit(): void {
  }

   async onAddUser(form : UserI){
      const user = await this.authService.registerUser(form.email, form.password);
      console.log("aquiii estoy??");
      if (user){
          this.checkUserIsVerified(form);
      }
      else {
         this.alert=true;
         this.message="Invalid Email";
         this.alertType="warning";        
      }  
    } 

   private checkUserIsVerified(user: UserI) {
      if (user && user.emailVerified) {
        this.router.navigate(['/home']);
      } else if (user) {
        this.router.navigate(['/verification-email']);
      }
     
    }

    closeAlert()
    {
      this.alert=false;
    }
  }
