import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectView } from 'src/app/models/project-view';
import { ProjectService } from 'src/app/services/project.service';
import { ImageService } from 'src/app/services/image.service';
 
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
  photo: null, 
  date: "",
  averageReview: 0,
}
 
  imageProject: any

  constructor( 
    private service: ProjectService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    this.getProject();
  }

  getImage(id: number) {
    this.imageService.getProjectImage(id).subscribe((res: any) => {
      let retrieveResonse = res;
      let base64Data = retrieveResonse.photo;
      this.imageProject = 'data:image/jpeg;base64,' + base64Data;
    })
  }

  getProject(){  
    this.service.getProject(this.activatedRoute.snapshot.params['id']).subscribe((data: ProjectView) => {
      this.projectView = data;
      this.getImage(this.projectView.id);
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