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

  

  steps: any = 1;

  project: Project = {
    id: 0,
    creator: JSON.parse(this.userService.getUser()).id,
    title: "",
    objective: "",
    description: "",
    photo: "",
    categories: [],
    street: "",
    number: 0,
    district: "",
    cep: "",
    reference: ""
   } 
   projectView: ProjectView = {
    id: JSON.parse(this.userService.getUser()).id,
    creator: 0,
    creatorName: "",
    creatorSurname: "",
    title: "",
    objective: "",
    address: 0,
    district: "",
    description: "",
    categories: [],
    progress: 0,
    photo: "",
    date: "",
    avarageReview: 0
   

   }
   

  constructor(private service: ProjectService, 
    private userService: UserService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute, ) { }


  ngOnInit(): void {
    
  }
  submit(){
    this.steps += 1;
  }

  doRegister(): void{
    this.service.addProject(this.project).subscribe(data => {
      this.project = data;
      let authenticProject = {
        id: data.id
      } 
    
      this.router.navigate(['project-profile/' + data.id])
      
      });
  }
  

}
