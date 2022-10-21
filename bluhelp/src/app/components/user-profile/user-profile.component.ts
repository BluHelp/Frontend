import { UserService } from './../../services/user.service';
import { ProjectGet } from './../../models/project-get';
import { UserGet } from './../../models/user-get';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 userget : UserGet = {
id : 0,
name : "",
surname : "",
password : "",
cpf : "",
photo : "",
email : "",
phone : "",
projects : []
 }

 projectget : ProjectGet = {
  id : 0,
  title : "",
  photo : "",
  avarageReview : 0,
  progress : 0
 }
ActiveTab:string = 'Projetos Criados'
 onTabClick(tab){
  this.ActiveTab = tab;
 }
 
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserGet()
  }
  getUserGet(){
    this.userService.getUser().subscribe(data =>{
      this.userget = data;
    }) 
  }
}
