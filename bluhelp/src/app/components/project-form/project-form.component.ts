import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  steps: any = 1;

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    this.steps += 1;
  }

}
