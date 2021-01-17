import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userName:string;
  public user$: Observable<any>;

  constructor(public authService: AuthService, public router: Router) {
    this.user$ = authService.userData;
    console.log('Datos');
    console.log(this.user$);
    this.user$.subscribe(response =>{
      this.userName = response.email;
    
    },
    error=>{
      console.log(error.messsage);
    });

    

   }
 
  
  async ngOnInit() {
    console.log('NavBar');

    const user = await this.authService.getCurrentUser();
    if(user)
    {
      console.log('STATUS USER', user.uid, user.email);
    }
    else console.log('STATUS USER: null');
    
    }
  
  async onLogout(){
    try{
      await this.authService.logout();
      this.router.navigate(['/home']);
    }
    catch(error){
      console.log(error);
    }
    

  }

}
