import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetComponent } from './components/pets/pet/pet.component';
import { Page404Component } from './components/pages/page404/page404.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AdminComponent } from './components/auth/admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { NewPetComponent } from './components/pets/new-pet/new-pet.component';
import { GuardGuard } from './components/auth/guard.guard';
import { ListPetsComponent } from './components/pets/list-pets/list-pets.component';
import { ListpetsComponent } from './components/pets/listpets/listpets.component';

const routes: Routes = [
  //{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
 { path: '', redirectTo:'/home', pathMatch: 'full'},
 { path: 'home', component: HomepageComponent },
 { path: 'admin', component: AdminComponent,canActivate: [GuardGuard] },
 { path: 'login', component: LoginComponent},
 { path: 'register', component: RegisterComponent},
 { path: 'forgot-password', component: ForgotPasswordComponent},
 // { path: 'pets', loadChildren: () => import('./components/pets/list-pets/list-pets.module').then(m => m.ListPetsModule) },
 { path: 'pets', component: ListpetsComponent , canActivate: [GuardGuard]}, 
 { path: 'pet/:id', component: PetComponent, canActivate: [GuardGuard]},
 { path: 'about', component: AboutComponent}, 
 { path: 'newpet', component: NewPetComponent, canActivate: [GuardGuard]},
 { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
