import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import {AuthService} from '../../../services/auth.service';
import {UserI} from '../../../models/user.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl({ value: '', disabled:true}, Validators.required),
    photoURL: new FormControl('', Validators.required),


  })
  ngOnInit(): void {
     
      this.authService.userData$.subscribe( User => {
         this.initValuesForm(User);
         console.log('user=>',User );       
      }) 

  }

  onSaveUser(user: UserI): void {
     console.log("DisplayName: ", this.profileForm);
     this.authService.saveUser(user); 
  }

  private initValuesForm(user:UserI):void{
    this.profileForm.patchValue({
      displayName: user.displayName,
      email: user.email, 
      photoURL: user.photoURL
    });
  }

}
