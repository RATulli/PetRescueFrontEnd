import { Component, OnInit } from '@angular/core';
import { petI } from 'src/app/models/pet.interface';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pets : petI[];
  
 
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.pets = this.petService.getAllPets();
  }


/*  public pets: {
    id: string;
    namePet:string;
    zoneFoundPet:string;
    imagePet:string;
  }[] = [
    {
      id:'1', 
      namePet:'Figaro',
      zoneFoundPet: `Se encontro en zona Parque Luro. Lleva un collar que dice "Figaro"`,

      imagePet:'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?filter=w600&filter=ds75',
    },
    {
      id:'2', 
      namePet:'pet02',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP',
    },
    {
      id:'3', 
      namePet:'pet03',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://miro.medium.com/max/5300/1*FNghpM3llxbk9SFi9ymPug.jpeg',
    },
    {
      id:'4', 
      namePet:'pet04',
      zoneFoundPet: `La encontramos en el barrio Los pinares, cerca de Constitucion`,
      imagePet:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2018/05/28/710403.jpg',
    },
  ];

*/

  
}
