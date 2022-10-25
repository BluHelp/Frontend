import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  holder: any = {
    email: "",
    password: ""
  }

  login(){
    this.service.loginUser(this.holder).subscribe(res => {
      let userAutenticado = {
        id: res
      }

      this.service.setUser(userAutenticado)
      this.router.navigate(['home/' + res])
    })
  }

}
