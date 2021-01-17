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

  constructor( private router: Router, private authService: AuthService) { }

    registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)      
  });

  ngOnInit(): void {
  }

   async onAddUser(form : UserI){

    try{
      const user = await this.authService.registerUser(form.email, form.password);
      if (user){
        this.router.navigate(['/home']);
      } 
    } 
    catch(error){
      console.log('Error', error);
    }
     
   }


}
