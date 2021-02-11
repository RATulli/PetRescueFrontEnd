import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.scss']
})
export class VerificationEmailComponent implements OnDestroy {

  
  
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSendEmail(): void {

    this.authService.sendVerificationEmail();
  }

  ngOnDestroy() {
    this.authService.logout();
  }

}
