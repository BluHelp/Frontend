import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private actRouter: ActivatedRoute,
              private userService: UserService
              ) {
  }

  ngOnInit(): void {
  }
  CreateProject() {
    this.router.navigate(['create-project/' + JSON.parse(this.userService.getUser()).id])
  }
  exitSystem() {
    this.router.navigate(['exit-system'])
  }
  Profile() {
    this.router.navigate(['profile'])
  }
  Search() {
    this.router.navigate(['search'])
  }
  Home() {
    this.router.navigate(['home/' + JSON.parse(this.userService.getUser()).id])
  }
}
