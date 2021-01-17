import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';
import { Page404Component } from '../../pages/page404/page404.component';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  
   mypet: Pet =null; 
   id: string;
   

  constructor(private route: ActivatedRoute,
              private router: Router,
              private petService: PetService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params.id;
    console.log("Tome el ID");
    console.log(this.id);
    let promesa = new Promise((resolve, reject) => {
         if (this.petService.getById(this.id) !== null) {
           resolve();
         }
         else {
           reject();
         }
    });

     promesa
       .then(res => {   
        this.mypet = this.petService.getById(this.id);
           
    })
    .catch( error => {
      this.router.navigate([Page404Component]);
    }); 
  }

}