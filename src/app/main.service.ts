import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 



@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  userName= "vantablanta"
  userRepo= ""
  searchRepos= ""

  getUsers(username:string):Observable<any> {

    this.userName= username;
    const url=`https://api.github.com/users/${this.userName}?${environment.key}`

    return this.http.get<any> (url)
  }
 
getRepos():Observable<any> {
  const url= `https://api.github.com/users/${this.userName}/repos?${environment.key}`

  return this.http.get<any> (url)
}

//searchRepo(): Observable<any> {
  //const url = `https://api.github.com/search/repositories?q=${this.searchRepo}?$(environment.key)`

 // return this.http.get<any> (url)
//}

}
