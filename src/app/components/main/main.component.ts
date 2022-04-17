import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

users:any

  constructor(private userService:MainService) { 

    this.searchUsers();
  }

  ngOnInit(): void {
  }

searchUsers(){
this.userService.getUsers().subscribe((search)=>{
  console.log(search)

  this.users=search
})
}

}
