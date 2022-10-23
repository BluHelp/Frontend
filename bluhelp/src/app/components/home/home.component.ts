import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectGet } from 'src/app/models/project-get';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  projectget: Array<ProjectGet> = new Array();

  constructor(
    private service: ProjectService,
    private router: Router  
  ) {}

  ngOnInit(): void {
    this.getProjects()
  }

  openProject(id: number){
    this.router.navigate(['project-profile/' + id])
  }

  getProjects(){
    this.service.getTop4Projects().subscribe(data => {
      this.projectget = data
      console.log(this.projectget);
      
    })
  }
}
