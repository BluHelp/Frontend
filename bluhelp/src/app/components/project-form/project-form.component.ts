import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectView } from 'src/app/models/project-view';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import { ProjectProfileComponent } from '../project-profile/project-profile.component';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {


  project: Project = {
    creator: JSON.parse(this.userService.getUser()).id,
    title: "",
    objective: "",
    description: "",
    photo: "",
    category: 0,
    street: "",
    number: 0,
    district: "",
    cep: "",
    reference: ""
   } 
   
  constructor(private service: ProjectService, 
    private userService: UserService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute, ) { }


  ngOnInit(): void {
    
  }
  currentTab: number = 0;
   
    alterStep(n: number) {
      if (this.currentTab >= 0 && this.currentTab <= 3) {
        this.currentTab = this.currentTab + n;
      }
    }
  

  doRegister(): void{
    this.service.addProject(this.project).subscribe(data => {
      this.project = data;

      this.router.navigate(['project-profile/' + data.id])      
      });
  }
  

}
