import { UserGet } from './../../models/user-get';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
