import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { filter } from 'rxjs/operators';
import { petI } from 'src/app/models/pet.interface';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-listpets',
  templateUrl: './listpets.component.html',
  styleUrls: ['./listpets.component.scss']
})
export class ListpetsComponent implements OnInit {

  pets = new Array<petI>();

  public load: boolean;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor(private petService: PetService) 
  {
     this.load = false;
  }

  async ngOnInit() {
  
    try{
      await (
        this.pets = this.petService.getAllPets().filter(Pet => Pet.typepet=='Cat') 
        ); 
       setTimeout(() => {
        this.load = true;
      }, 2400); 
     }
     catch(error)
     {
       console.log(error);
     }        

    /* try{
      await (
        this.petService.getAllPets()
         .subscribe(data => {
           console.log(data);
           this.pets = data.filter(Pet => Pet.)
         })
        ); 
       setTimeout(() => {
        this.load = true;
      }, 2400); 
     }
     catch(error)
     {
       console.log(error);
     }
     */
  }

}
