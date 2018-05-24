import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http ,Response ,Headers} from '@angular/http';

/*
  Generated class for the AdminbooksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminbooksProvider {
  book: any
  constructor(public http: Http) {
    console.log('Hello AdminbooksProvider Provider');
  }
  getBooks(){
    console.log('get books');
    return this.http.get('http://localhost:4000/adminallbooks')
    .map((res:Response)=>{
      return res.json();
    })
    // return this.books.slice();
  }
  saveBooks(book: any){
    let headers=new Headers;
    headers.append('Content-Type','application/json');
    console.log("book",book);
    return this.http.post('http://localhost:4000/newbook',book,{headers:headers})
    .map(res => res.json()
    )
}
getBook(id:any){
  console.log('getting book',id);
  return this.http.get('http://localhost:4000/bookdetails/' + id)
                .map((res:Response) =>{
                  console.log(res.json())
                  this.book=res.json()
                  return res.json();
                })
}
deleteBook(index:number){
  let headers=new Headers;
  headers.append('Content-Type','application/json');
  return this.http.delete('http://localhost:4000/delete/' + index,{headers:headers})
  .map((res:Response) =>{
    return res.json();
  })
}
getRequestedBooks(){
  return this.http.get('http://localhost:4000/admin')
          .map((res:Response) =>{
            return res.json();
          })
}
acceptRequestedBooks(bookId:any,userID:any){
  console.log(bookId,'====',userID);
  let headers=new Headers();
  headers.append('Content-Type','application/json');
  return this.http.delete('http://localhost:4000/accept/'+bookId+'/'+userID,{headers:headers})
          .map((res:Response) =>{
            return res.json();
          })
}

updateBook(index ,book){
  let headers=new Headers;
  headers.append('Content-Type','application/json');
  return this.http.put('http://localhost:4000/update/' + index,book,{headers:headers})
  .map((res:Response) =>{
    return res.json();
  })

}
  
}
