import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 



@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  userName= "Charlotte-Natasha"
  userRepo= ""
  searchRepos= ""

  getUsers(username:string):Observable<any> {

    this.userName= username;
    const url=`https://api.github.com/users/${this.userName}`
    return this.http.get<any> (url, {
      headers: new HttpHeaders({
        Authorization: environment.key
      })
    })
    
  }
 
getRepos(username:string):Observable<any> {

  this.userName= username;
  const url= `https://api.github.com/users/${this.userName}/repos`

  return this.http.get<any> (url)
}

//searchRepo(): Observable<any> {
  //const url = `https://api.github.com/search/repositories?q=${this.searchRepo}?$(environment.key)`

 // return this.http.get<any> (url)
//}

}
