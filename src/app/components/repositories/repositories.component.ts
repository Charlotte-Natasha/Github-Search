import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos:any

  constructor(private repoService:MainService) { 

    //this.searchRepos();
  }

  ngOnInit(): void {
  }

  //searchRepos(){
   // this.repoService.getRepos().subscribe((search)=>{
   //   console.log(search)
    
    //  this.repos=search
   // })
   // }

}
