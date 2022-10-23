import { UserService } from './../../services/user.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  category: {
    id: 0,
    name: ""
  },
  progress: 0,
  photo: "", 
  date: "",
  avarageReview: 0,
}
 
  constructor( 
    private service: ProjectService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router  
  ) { }
 
  ngOnInit(): void {
    this.getProject()
  }

  getProject(){  
    this.service.getProject(this.activatedRoute.snapshot.params['id']).subscribe((data: ProjectView) => {
      this.projectView = data;
      console.log(this.projectView)
    })
  }

  deleteProject(){
    this.service.deleteProject(this.activatedRoute.snapshot.params['id']).subscribe(() => {})
    this.router.navigate(['project-profile/' + this.projectView.id])
  }

  onContributions(){
    this.router.navigate(['contributions/' + this.projectView.id])
  }
}