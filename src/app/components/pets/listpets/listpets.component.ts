import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
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
  petFilter :string;

  public load: boolean = false;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  
  constructor(private petService: PetService, private route: ActivatedRoute) 
  {
     this.load = false;
     this.pets = null;
  }

  ngOnInit() {
      this.load = false;
      this.pets = null;
      this.route.queryParams.subscribe( data => {
        console.log('accediendo parametros',data);
        console.log(data.typepet);  
        this.petFilter = data.typepet;     
        console.log(this.petFilter);
        if (this.petFilter!=undefined)
           this.pets = this.petService.getAllPets().filter(PetI => PetI.typepet==this.petFilter);
        else
           this.pets = this.petService.getAllPets(); 
          console.log(this.pets);

          //porque todo junto aqui funciona y si lo saco, funciona la primera y la segunda no? 
      });
     
      setTimeout(() => {
        this.load = true;
      }, 1500);
  }
}
