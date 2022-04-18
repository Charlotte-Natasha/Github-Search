import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos:any;
  term!: string
  date = new Date ('2022-04-17')
  dets: any
  interval:any

  constructor(private repoService:MainService) { 

    //this.searchRepos();
    //this.updateDets();
  }

  ngOnInit(): void {
  }

  //updateDets(){

    //this.interval = setInterval(() => {
     // this.dets =Date.now();
     // let upas:any = new Date(this.repos.updated_at)
      //this.dets = this.dets - upas;
   // }, 1000)
    
   // }
    
  }

  

 

