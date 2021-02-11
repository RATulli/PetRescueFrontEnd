import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
 

  constructor(public authService: AuthService       
              ) { 

  }

  ngOnInit() {
    console.log("TOKEN:", this.authService.getToken());
    console.log("TOKEN LOCALSTORAGE: ", sessionStorage.getItem('token'));
  
  }

}
