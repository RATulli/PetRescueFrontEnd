import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ReactiveFormsModule} from '@angular/forms';

/* FireBase*/ 

import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';

/* Componentes */

import { NewPetComponent } from './components/pets/new-pet/new-pet.component';
import { NewPetModule } from './components/pets/new-pet/new-pet.module';
import { PetComponent } from './components/pets/pet/pet.component';
import { AdminComponent } from './components/auth/admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { Page404Component } from './components/pages/page404/page404.component';
import {MaterialModule} from './material';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ListpetsComponent } from './components/pets/listpets/listpets.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { CarouselComponent } from './components/pages/carousel/carousel.component';
import { VerificationEmailComponent } from './components/auth/verification-email/verification-email.component';
import { ProfileComponent } from './components/users/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPetComponent,
    PetComponent,
    Page404Component,
    FileUploadComponent,
    NavbarComponent,
    AboutComponent,
    AdminComponent,
    LoginComponent,
    HomepageComponent,
    ListpetsComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CarouselComponent,
    VerificationEmailComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    NewPetModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
