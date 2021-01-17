import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPetsRoutingModule } from './list-pets-routing.module';
import { ListPetsComponent } from './list-pets.component';
import { MaterialModule} from '../../../material'


@NgModule({
  declarations: [ListPetsComponent],
  imports: [
    CommonModule,
    ListPetsRoutingModule,
    MaterialModule,  
  ],
  exports: [
  ]
})
export class ListPetsModule { }
