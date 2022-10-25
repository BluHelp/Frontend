import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectGet } from 'src/app/models/project-get';
import { ProjectService } from 'src/app/services/project.service';
import { ImageService } from './../../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  projectget: Array<ProjectGet> = new Array();

  constructor(
    private service: ProjectService,
    private router: Router,  
    private imageService: ImageService
  ) {}

  imageProject: any
  
  ngOnInit(): void {
    this.getProjects()
  }

  openProject(id: number){
    this.router.navigate(['project-profile/' + id])
  }

  getProjects(){
    this.service.getTop4Projects().subscribe(data => {
      this.projectget = data
      this.projectget.forEach(project => {
        this.getProjectImage(project.id);
      });
      console.log(this.projectget);
    })
  }

  getProjectImage(id: number) {
    this.imageService.getProjectImage(id).subscribe((res: any) => {
      let retrieveResonse = res;
      let base64Data = retrieveResonse.photo;
      this.imageProject = 'data:image/jpeg;base64,' + base64Data;
    })
  }
}
