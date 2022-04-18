import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

users:any
repos:any
username!: string;

  constructor(private userService:MainService, private repoService:MainService) { 

    this.searchUsers();
    //this.searchRepos();
  }

  ngOnInit(): void {
  }

searchUsers(){
this.userService.getUsers(this.username).subscribe((search)=>{
  //console.log(search)
//console.log(this.username)
  this.users=search
})
}

//searchRepos(){
  //this.repoService.getRepos().subscribe((search)=>{
    //console.log(search)
  
   // this.repos=search
 // })
  //}

}
