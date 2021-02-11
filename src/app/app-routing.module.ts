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
import { ListpetsComponent } from './components/pets/listpets/listpets.component';
import { VerificationEmailComponent } from './components/auth/verification-email/verification-email.component';
import { ProfileComponent } from './components/users/profile/profile.component';

const routes: Routes = [
   { path: '', redirectTo:'/home', pathMatch: 'full' },
 { path: 'home', component: HomepageComponent },
 { path: 'admin', component: AdminComponent,canActivate: [GuardGuard] },
 { path: 'login', component: LoginComponent},
 { path: 'register', component: RegisterComponent},
 { path: 'forgot-password', component: ForgotPasswordComponent},
 { path: 'verification-email', component: VerificationEmailComponent},
 { path: 'pets', component: ListpetsComponent , canActivate: [GuardGuard]},
 { path: 'pet/:id', component: PetComponent, canActivate: [GuardGuard]},
 { path: 'about', component: AboutComponent}, 
 { path: 'newpet', component: NewPetComponent, canActivate: [GuardGuard]},
 { path: 'profile', component: ProfileComponent, canActivate: [GuardGuard]},
 { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
