import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 



@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  userName= "UnplugCharger"
  

  getUsers():Observable<any> {
    const url=`https://api.github.com/users/${this.userName}?${environment.key}`

    return this.http.get<any> (url)
  }

  
}
