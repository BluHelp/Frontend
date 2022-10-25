import { ImageService } from './../../services/image.service';
import { UserService } from './../../services/user.service';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectGet } from './../../models/project-get';
import { UserGet } from './../../models/user-get';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userGet : UserGet = {
    id : 0,
    name : "",
    surname : "",
    password : "",
    cpf : "",
    photo : null,
    email : "",
    phone : "",
    createdProjects : new Array<ProjectGet>,
    contributedProjects : new Array<ProjectGet>
  }

  projects : ProjectGet = {
    id : 0,
    title : "",
    photo : null,
    averageReview : 0,
    progress : 0
  }

  imageUser: any
  imageProject: any

  ActiveTab:string = 'Projetos Criados'

 onTabClick(tab){
  this.ActiveTab = tab;
 }
 
  constructor(private route: ActivatedRoute, 
              private userService: UserService,
              private imageService: ImageService,
              private router: Router,
              private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getUserGet();
  }

  getUserGet(){
    this.userService.getUserWithProjects(this.route.snapshot.params['id']).subscribe(
      (data: UserGet) =>
      {this.userGet = data;
      this.userGet.createdProjects.forEach(project => {
        this.getProjectImage(project.id);
      });
      this.userGet.contributedProjects.forEach(project => {
        this.getProjectImage(project.id);
      });
      this.getImage(this.userGet.id);
      console.log(this.userGet)})
  }

  openProject(id: number){
    this.router.navigate(['project-profile/' + id])
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

  getProjectImage(id: number) {
    this.imageService.getProjectImage(id).subscribe((res: any) => {
      let retrieveResonse = res;
      let base64Data = retrieveResonse.photo;
      this.imageProject = 'data:image/jpeg;base64,' + base64Data;
    })
  }
}
