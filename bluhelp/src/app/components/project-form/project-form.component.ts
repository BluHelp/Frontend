import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectView } from 'src/app/models/project-view';
import { ImageService } from 'src/app/services/image.service';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import { ProjectProfileComponent } from '../project-profile/project-profile.component';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  @Input()
  text: any = {
  id: 0,
  typeObject: ""
  }

  project: Project = {
    creator: JSON.parse(this.userService.getUser()).id,
    title: "",
    objective: "",
    description: "",
    category: 0,
    street: "",
    number: 0,
    district: "",
    cep: "",
    reference: ""
   } 

  uploadImage: File = new File(["foo"], "foo.txt", { type: "text/plain", })
  postResponse: any;
  successResponse: string = "";
   
  constructor(private service: ProjectService, 
    private userService: UserService, 
    private imageService: ImageService,
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
      this.imageUpload(data.id)      
      this.router.navigate(['project-profile/' + data.id])      
      });
  }
  
  public onFileSelected(event: any) {
    this.uploadImage = event.target.files[0];

    console.log(this.uploadImage);
  }

  imageUpload(id: number) {
      
    const imageFormData = new FormData()
    
    imageFormData.append('image', this.uploadImage, this.uploadImage.name)
    
    this.imageService.postImage('project', id, imageFormData)
    .subscribe((response: any) => {
      this.postResponse = response
      this.successResponse = this.postResponse.body.message
    });
}

}
