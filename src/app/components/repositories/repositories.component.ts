import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  users:any

  constructor(private repoService:MainService) { 

  }

  ngOnInit(): void {
  }

 
    
  }

  

 

