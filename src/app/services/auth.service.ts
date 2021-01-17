import { Injectable } from '@angular/core';
import {UserI} from '../models/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {auth} from 'firebase/app'
import { first } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData: Observable<firebase.User>;
  reDirectUrl: string;
  
  private JWT_TOKEN = "ahhhhhhhasdjasdasjkdgksajdgkj";
  private REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: String;
  private apiURL: string = 'http://localhost:8081'

  constructor(private authService: AngularFireAuth, private http: HttpClient) {
    this.userData = this.authService.authState;
  
    
   }

   async registerUser(email: string, pass: string){
       /* return new Promise((resolve, reject) => {
          this.authService.createUserWithEmailAndPassword(email, pass)
          .then (userData => resolve(userData),
          err => reject(err)); 
        });*/
        try{
          const result = await this.authService.createUserWithEmailAndPassword(email, pass);
          return result;
        }
        catch(error){
          console.log(error);
        }
        
   }

  loginGoogle(){
      return this.authService.signInWithPopup(new auth.GoogleAuthProvider());
  }

  async loginByEmail(user:UserI) {
    try{
      const { email, password } = user;
      const result = await this.authService.signInWithEmailAndPassword(email, password); 
      return result;
    }
    catch(error){
      console.log('ERROR: ',error);
    } 
    

  }
  
   async logout(){
     try{
      await this.authService.signOut()
      .then (status => {
           
 
      })
      .catch( error => {
        console.log('Error: ', error);
      }); 
     }
     catch(error)
     {
       console.log(error);
     }
     }

     getCurrentUser(){
       return this.authService.authState.pipe(first()).toPromise();
      }
      
    getUserName(){
      return 'rominaalejandratulli@gmail.com';
    }

    loginServer(user: UserI): Observable<any> {
        
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-type': 'aplication/json'
          })
        };

       try{
        const observable = this.http.post(this.apiURL+'/login', user, httpOptions);  
        observable.subscribe( response =>{
            this.JWT_TOKEN = response['jwt'];
            localStorage.setItem('token', this.JWT_TOKEN); 
        },
          error => {
           
          });
          return observable;
       }
       catch(error) {
         console.log('Error Logeo:' + error);
         return undefined;
        }      
    }
    
    logoutServer(): void {
       this.JWT_TOKEN = null;
       localStorage.removeItem('token');
    }

    getToken() {
      return this.JWT_TOKEN;
    }



}
    
    
  

