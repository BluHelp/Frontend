import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  steps: any = 1;

  project: Project = {
    id: 0,
    creator: 0,
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

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
  }
  submit(){
    this.steps += 1;
  }

  doRegister(): void{
    this.service.addProject(this.project).subscribe(data => {this.project = data;})
  }

}
