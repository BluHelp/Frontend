import { Component, OnInit } from '@angular/core';
import { ProjectPhoto } from 'src/app/models/project-photo';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-modal-photo',
  templateUrl: './modal-photo.component.html',
  styleUrls: ['./modal-photo.component.css']
})
export class ModalPhotoComponent implements OnInit {

  projectphot: ProjectPhoto = { photo: "", progress: 0, }

  constructor(private service: ProjectService) {

  }
  ngOnInit(): void {
  }
}