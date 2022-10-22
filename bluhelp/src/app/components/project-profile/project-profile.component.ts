import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectView } from 'src/app/models/project-view';
import { ProjectService } from 'src/app/services/project.service';
 
@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})
 
export class ProjectProfileComponent implements OnInit {
 
projectView : ProjectView = {
  id: 0, 
  creator: 0, 
  creatorName:"", 
  creatorSurname:"", 
  title:"", 
  objective:"", 
  address:0, 
  district:"", 
  description:"", 
  categories:[],
  progress: 0,
  photo:"", 
  date:"",
  avarageReview:0,
}
 
  constructor( private service : ProjectService, private activatedRoute: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.getProject()
  }
  getProject(): void{
    
    this.service.getProject(this.activatedRoute.snapshot.params['id']).subscribe((data: ProjectView) => {
      this.projectView = data;
    })
  }

  
}