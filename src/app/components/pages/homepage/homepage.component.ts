import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { GuardGuard } from '../../auth/guard.guard';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  public isLogged=false;
  opened = true;
  public user$: Observable<any>;

  constructor(public authService: AuthService,
              public authGuard: GuardGuard        
              ) { 
                this.user$ = this.authService.userData;
    
  }

  ngOnInit() {
  
  }

}
