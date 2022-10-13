import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  steps: any = 1;

  user: User = {name: "", surname: "", password: "", cpf: "", photo:"", email: "", phone: ""}

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  submit(){
    this.steps += 1;
  }

  doRegister(): void {
    this.service.addUser(this.user).subscribe(
      data => { 
        this.user = data;
      })
  }

}
