import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { UserI} from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {

  constructor( private afs: AngularFirestore) { }

  

  public getAllUserProfile():Observable<UserI[]>{
     return this.afs
       .collection('users')
       .snapshotChanges()
       .pipe( 
         map(actions => 
           actions.map (a => {
             const data = a.payload.doc.data() as UserI;
             const id = a.payload.doc.id;
             return {id, ...data};
           })
       )
     ); 
  }
  
  public getUserProfile(id: string): Observable<UserI>{
    return this.afs.doc<UserI>(`users/${id}`).valueChanges();


  }

  public updateUserProfile(user: UserI, uid: string) {
    console.log('Updating user....');
    this.afs.doc('users/'+uid).update(user);  
  }


  public newUserProfile(user: UserI, uid: string){
     console.log("Creando nuevo perfil.....");
     this.afs.collection('users').doc(uid).set({
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoUrl: user.photoURL
  });
     //this.afs.collection('users').add(user);  
    
  }
}






