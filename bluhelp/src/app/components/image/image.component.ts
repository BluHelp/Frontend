import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ImageService } from 'src/app/services/image.service';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  user: User = { name: "", surname: "", password: "", cpf: "", photo:"", email: "", phone: ""}

  @Input()
  text: any = {
  id: 0,
  typeObject: ""
  }

  constructor(private imageservice: ImageService,
    private actroute: ActivatedRoute, 
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  uploadImage: File = new File(["foo"], "foo.txt", { type: "text/plain", })
  postResponse: any;
  successResponse: string = "";
  imageUpload(type: string = this.text.typeObject) {

   

    if (type == 'project') {

      const imageFormData = new FormData()
      imageFormData.append('image', this.uploadImage, this.uploadImage.name)

      this.imageservice.getImage( this.text.id)
        .subscribe((response: any) => {
          this.postResponse = response
          this.successResponse = this.postResponse.body.message
        });
        this.router.navigate(['' + this.text.id])

    } else if (type == 'user') {

      const imageFormData = new FormData()
      imageFormData.append('photo', this.uploadImage, this.uploadImage.name)

      this.imageservice.getUserImage( this.text.id)
        .subscribe((response: any) => {
          this.postResponse = response
          this.successResponse = this.postResponse.body.message
        });

}
  }

  public onFileSelected(event: any) {

    this.uploadImage = event.target.files[0];

    console.log(event.target.files[0]);

  }
  
}
