import { Component, OnInit } from '@angular/core';
import { petI } from 'src/app/models/pet.interface';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})

export class ListPetsComponent implements OnInit {


  pets : petI[];
  
 
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.pets = this.petService.getAllPets();
    console.log("carge tdodo");
  }

}
