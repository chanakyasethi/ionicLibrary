import { Http,Response,Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  public user:any;
  public authToken:any;
  book:any;
  // userr:any;
  constructor(public http: Http,public auth : AuthProvider) {
    console.log('Hello UserProvider Provider');
  }
  onIssueBook(bookid: any,userid: any){
    console.log('id',bookid)
    let headers=new Headers;
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:4000/request/'+bookid+'/'+userid,{headers:headers})
    .map((res:Response) =>{
      return res.json();
    })
}
onReturnBook(book: any,userid:any){
    console.log(book._id);
    let headers=new Headers;
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:4000/return/'+book._id+'/'+userid,{headers:headers})
    .map((res:Response) =>{
      return res.json();
    })
} 
IsssuedBook(){
    const user = this.auth.user; 
    console.log("qqqqqqqq",user);   
    return this.http.get('http://localhost:4000/issuedbooks/'+user._id)
    .map((res:Response) =>{
      console.log(res);
      return res.json();
    })
}
getBooks(){
    return this.http.get('http://localhost:4000/allbooks')
            .map((res:Response) =>{
              return res.json();
            })
}
getBook(id: any){
    return this.http.get('http://localhost:4000/bookdetails/' + id)
            .map((res:Response) =>{
              this.book = res.json();
              console.log(res.json())
              return res.json();
            })
}
}
