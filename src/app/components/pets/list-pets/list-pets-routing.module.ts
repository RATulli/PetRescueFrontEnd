import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPetsComponent } from './list-pets.component';

const routes: Routes = [{ path: '', component: ListPetsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPetsRoutingModule { }
