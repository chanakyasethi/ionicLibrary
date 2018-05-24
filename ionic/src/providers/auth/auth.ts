import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Http, Headers, Response } from '@angular/http';
// import { NavController } from 'ionic-angular';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public user:any;
  public authToken:any;
  constructor(public http: Http,
    // public navCtrl: NavController
  ) {
    console.log('Hello AuthProvider Provider');
  }
  registerUser(user: any){
    console.log("service",user)
    let headers=new Headers;
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/signup',user,{headers:headers})
    .map((res:Response) =>{
      return res.json();
    })
}
login(user){
    console.log('login== user',user);
    let headers=new Headers;
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/login',JSON.stringify(user),{headers:headers}) //JSON.stringify(user) = user
    .map((response:Response) =>{
    console.log('login response',response.json());  
    if(response.json().success){
        console.log(response.json().user)
        // localStorage.setItem('id_token',response.json().token);
        // localStorage.setItem('user',JSON.stringify(response.json().user));     
         this.user=response.json().user;
         console.log('this user',response.json().user)
         this.authToken=response.json().token;
         return response.json();
    } else{
        return response.json();
    }      
    });
}
  onLogOut()
  {
  // if(this.user)
  // {
    // console.log(this.user);
    console.log("this.user");
   return this.http.get("http://localhost:4000/logout").map((response:Response)=>{  
     console.log(response.json())
     return response.json();
      // this.user=undefined;
      // this.authToken=undefined;
      // localStorage.clear();
      // this.navCtrl.popToRoot();
      });
    }
  // }
}
