 import {NgModule} from '@angular/core';
 import {CommonModule} from '@angular/common';
 import {MatButtonModule} from '@angular/material/button';
 import {MatCardModule} from '@angular/material/card';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatListModule} from '@angular/material/list';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatSelectModule} from '@angular/material/select';
 import {MatIconModule} from '@angular/material/icon';
 import {MatInputModule} from '@angular/material/input';
 import {MatChipsModule} from '@angular/material/chips';
 import {MatProgressBarModule} from '@angular/material/progress-bar';
 import {MatSnackBarModule} from '@angular/material/snack-bar';
 import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 
 
const mymodule = [
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule
];

 @NgModule({
     declarations: [],
     imports : [
         CommonModule,
         mymodule
     ],
     exports: [
         mymodule
        ]
 })
 export class MaterialModule {}