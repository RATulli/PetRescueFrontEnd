import { Injectable } from '@angular/core';
import {UserI} from '../models/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  public tokenAPI: string;
  private JWT_TOKEN = "ahashdaslkdahskjdahskdj";
  private reDirectUrl: string;
  userDetails = undefined;
  private apiURL: string = 'http://localhost:8081';
  public userData$: Observable<firebase.User>;

  constructor(private authService: AngularFireAuth, private http: HttpClient) {
    this.tokenAPI = undefined;
    this.reDirectUrl= '/home';
    this.userData$ = authService.authState;
   }

   async registerUser(email: string, pass: string){
     
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
      //this.getTokenFireBase();
  }

  async loginByEmail(user:UserI) {
    try{
      const { email, password } = user;
      const result = await this.authService.signInWithEmailAndPassword(email, password); 
      
      console.log("TOKEN?", (await this.authService.currentUser).getIdToken());

      localStorage.setItem('token', this.tokenAPI);

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

    async loginServerToken(user: UserI ) {
        
        let tokenS: String;
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-type': 'aplication/json'
          })
        };

      const { email, password } = user;  
      const result = await this.authService.signInWithEmailAndPassword(email, password);
       console.log("TOKEN?", (await (await (await this.authService.currentUser).getIdToken())));
      
      this.tokenAPI = (await (await this.authService.currentUser).getIdToken()).toString();

      console.log("TOKEN OBTENIDO:", this.tokenAPI);
      
     

    //const promise = this.http.post(this.apiURL, user, httpOptions).toPromise();

     /* promise.then ( responde => {
          console.log("Ingreso exitoso, con obtencion de token");
          })
        .catch(error => {
          console.log("El server no nos dio el token.")
          
       }); */
      sessionStorage.setItem('token', this.tokenAPI);
      return result;
    }

    /* pasync getTokenFireBaseII(): string {

      return (await (await this.authService.currentUser).getIdToken()).toString();
    }


    private setToken(data: string){
       this.tokenAPI = this.JWT_TOKEN;
    }

    */

    logoutServerToken(): void {
       sessionStorage.removeItem('token');  
       this.tokenAPI = undefined;
       this.authService.signOut();
    }

    async sendVerificationEmail(): Promise<void> {
      return (await this.authService.currentUser).sendEmailVerification();
    }


    async resetPassword(email: string): Promise<void> {
      try {
        return this.authService.sendPasswordResetEmail(email).catch ( e=> {
          console.log(e);
          console.log("soy la segunda excepcion, pero en realidad soy la primera");
        } )
      } catch (error) {
        console.log("Error resert password: ",error);
      }
    }

    getToken(): string {
      return sessionStorage.getItem('token');
      //return this.tokenAPI;
    }

    setURL(data: string)
    {
      this.reDirectUrl = data;
    }

    getURL():string{
      return this.reDirectUrl;
    }
    

    saveUser(user: UserI){
      console.log("Users: ", user.displayName);
      console.log("User photoURL", user.photoURL);
 
      

      this.authService.currentUser
      .then( user => {
         user.updateProfile({
           displayName: user.displayName,
           photoURL: user.photoURL
         });
         console.log("User Updated");
      })
      .catch(err => {
        console.log("Error =>", err);

        //Muestra un error aqui. No llega a salvar el update.
        // Ahora al segundo intento no lo hace. Problemas de conexion a internet?  
      });
    }
}
    
    
  

