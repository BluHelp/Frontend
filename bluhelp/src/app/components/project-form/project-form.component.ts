import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

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
    streetType: "",
    number: 0,
    district: "",
    cep: "",
    reference: ""
   } 

  constructor(private service: ProjectService, private userService: UserService) { }

  ngOnInit(): void {
  }
  submit(){
    this.steps += 1;
  }

  doRegister(): void{
    this.service.addProject(this.project).subscribe(data => {this.project = data;})
  }

}
