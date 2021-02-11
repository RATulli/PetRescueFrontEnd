import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { AuthService} from '../../../services/auth.service';
import { ProfileComponent } from '../../users/profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userName:string;
  public user$: Observable<any>;

  constructor(public authService: AuthService, public router: Router) {
    
    
   }
 
  
  async ngOnInit() {
    
    }
  
  async onLogout(){
    try{
      await this.authService.logoutServerToken();
      this.router.navigate(['/']);
    }
    catch(error){
      console.log(error);
    }
  }

  profileView(){
    this.router.navigate(['/profile']);
  }


}
