import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';
import { LoadPet } from 'src/app/models/load-pet';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.scss']
})
export class NewPetComponent implements OnInit {

  selectedFile:File = null;
  selectedId:String = '1';
  uploadForm: FormGroup;
  fileText: string;
  id: string;

  
  constructor(private http: HttpClient, private petService: PetService) {

   }

  ngOnInit(): void {
  }

  onFileSelected(event) {
     this.selectedFile = <File>event.target.files[0];
  }

  cargarMascota() {
      let pet = new LoadPet();
      pet.id = this.id;
      pet.filePet = this.fileText;   
     console.log(pet);
     this.petService.upLoadPet(pet)
      .then(res => {
         console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
}

onFileComplete(data: any) {
  console.log(data);
  }
}
