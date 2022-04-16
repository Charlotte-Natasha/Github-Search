import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient:HttpClientModule) { }

  //for github profile
  //public getProfile(searchQuery){
   //let dataUrl = `https://api.github.com/users/${searchQuery}`;
 // }

  //for github repos
}
