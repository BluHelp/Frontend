import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  steps: any = 1;

  user: User = { name: "", surname: "", password: "", cpf: "", photo:"", email: "", phone: ""}

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.steps += 1;
  }

  doRegister(): void {
    this.service.addUser(this.user).subscribe(data => {
       this.user = data;
       let userAutenticado = {
        id: data.id
      } 
      this.service.setUser(userAutenticado)
      this.router.navigate(['home/' + data.id])
      
      });
  }

}
