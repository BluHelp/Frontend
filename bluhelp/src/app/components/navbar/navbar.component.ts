import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  criarProjeto() {
    this.router.navigate(['criarProjeto'])
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
    this.router.navigate(['Home'])
  }
}
