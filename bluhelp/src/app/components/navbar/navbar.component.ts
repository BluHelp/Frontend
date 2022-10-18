import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private actRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
  criarProjeto() {
    this.router.navigate(['criarProjeto/' + this.actRouter.snapshot.params['id']])
  }
  exitSystem() {
    this.router.navigate(['exitSystem'])
  }
  Profile() {
    this.router.navigate(['Profile'])
  }
  Search() {
    this.router.navigate(['Search'])
  }
  Home() {
    this.router.navigate(['Home/:id'])
  }
}
