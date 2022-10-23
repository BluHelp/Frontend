import { ImageService } from './../../services/image.service';
import { UserService } from './../../services/user.service';
import { ProjectGet } from './../../models/project-get';
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
    photo : null,
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

  imageUser: any

  ActiveTab:string = 'Projetos Criados'

 onTabClick(tab){
  this.ActiveTab = tab;
 }
 
  constructor(private route: ActivatedRoute, 
              private userService: UserService,
              private imageService: ImageService) { }

  ngOnInit(): void {
    this.getImage(JSON.parse(this.userService.getUser()).id)
  }

  getUserGet(){
    this.userService.getUser().subscribe(data =>{
      this.userget = data;
    }) 
  }


  // < METODO PARA PEGAR A IMAGEM >
  // 
  // * Chama o metodo de getImage do back-end,
  // * que retorna uma Base64 em String.
  // * O [src] do HTML (TEM QUE TER [] NO SRC) mostra a imagem.
  // * A variavel que recebe a Base64 e "imageUser" localizada acima tipada com any
  // * Esse metodo e chamada no ngOnInit e recebe o ID do usuario logado,
  // * localizado no LocalStorage
  getImage(id: number) {
    this.imageService.getUserImage(id).subscribe((res: any) => {
      let retrieveResonse = res;
      let base64Data = retrieveResonse.photo;
      this.imageUser = 'data:image/jpeg;base64,' + base64Data;
    })
    
  }
}
