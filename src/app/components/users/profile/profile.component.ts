import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import {AuthService} from '../../../services/auth.service';
import {UserI} from '../../../models/user.interface';
import { ProfileUserService } from 'src/app/services/profile-user.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import {fileI} from '../../../models/file.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  
  public image: fileI;
  public currentImage: string = 'https://picsum.photos/id/113/150/150'; 

  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    photoURL: new FormControl('', Validators.required)
  
  });

  public userProfiles$: Observable<UserI[]>;
  public userP: Observable<UserI>;
  public enableButton:boolean = false;

  constructor(private authService: AuthService, private userProfileService: ProfileUserService) {
   }

   ngOnInit(): void {
     //this.userProfileService.getAllUserProfile().subscribe( res => console.log('Users', res));
     //this.userProfiles$ = this.userProfileService.getAllUserProfile();
     // Para futura implementacion de manejo de usuarios. 
  
     console.log("GETUID(): ", this.authService.getUID());
     this.userProfileService.getUserProfile(this.authService.getUID()).subscribe ( User => {
        this.initValuesForm(User);  
         console.log("INICIO DE PROFILE USERS -> ", User);
        /*  if (User.photoURL) 
            this.photoUrl = User.photoURL; */
           }
      );

     /* this.authService.userData$.subscribe( User => {
         this.initValuesForm(User);  
         console.log("INICIO DE PROFILE USERS -> ", User);
         if (User.photoURL) 
            this.photoUrl = User.photoURL;

      }); */
  }

  enableUpdateButton(user: UserI):boolean{
  
    this.enableButton= true; 
    return ((user.displayName!='') &&
            (user.email!='') &&
            (user.phoneNumber!='') &&
            (user.photoURL!='')        
    ); 

  }

  onSaveUser(user: UserI): void {
     // user.photoURL = this.photoUrl;
     console.log("Antes de Salvar: ", user);

    
     this.userProfileService.newUserProfile(user, this.authService.getUID()); 
     //agregar el parametro this.image aqui en la funcion
     
     
     //this.userProfileService.updateUserProfile(user, this.authService.getUID());
     
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Profile Update',
      showConfirmButton: false,
      timer: 2500
    });

  }

  private initValuesForm(user:UserI):void{
     
    console.log("INICIALIZANDO FORMULARIO USer ->", user);
    if (user.photoURL)
      this.currentImage = user.photoURL;

    this.profileForm.patchValue({
        displayName: user.displayName,
        email: user.email, 
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber
      });

      
    }

    handleImage(image: fileI):void{
      this.image = image;
    }
   
    
    } 

 
 
