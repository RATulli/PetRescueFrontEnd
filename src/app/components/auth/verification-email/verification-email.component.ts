import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.scss']
})
export class VerificationEmailComponent implements OnDestroy {

  
  
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {

   
  }

  onSendEmail(): void {

    this.authService.sendVerificationEmail();
  }

  goHomePage(){
    this.router.navigate(['/home']);
  }

   ngOnDestroy() {
    this.authService.logout();
  }

}
