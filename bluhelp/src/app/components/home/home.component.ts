import { Component, OnInit } from '@angular/core';
import { ProjectGet } from 'src/app/models/project-get';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

projectget : ProjectGet = {id:0,title: "", photo: "", avarageReview:0, progress:0,}

  constructor(private service : ProjectService) { }

  ngOnInit(): void {
  }

}
