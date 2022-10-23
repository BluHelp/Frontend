import { ImageService } from './../../services/image.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input()
  text: any = {
  id: 0,
  typeObject: ""
  }

  currentTab:  number = 0;
  
  user: User = { name: "", surname: "", password: "", cpf: "", email: "", phone: ""}
  
  uploadImage: File = new File(["foo"], "foo.txt", { type: "text/plain", })
  postResponse: any;
  successResponse: string = "";

  constructor(private service: UserService, 
              private router: Router,
              private imageService: ImageService) { }

  ngOnInit(): void {
  }

  alterStep(n: number) {
      if (this.currentTab >= 0 && this.currentTab <= 2) {
        this.currentTab = this.currentTab + n;
      }
    }

  doRegister(): void {
    this.service.addUser(this.user).subscribe(data => {
       this.user = data;
       let userAutenticado = {
        id: data.id
      } 
      this.service.setUser(userAutenticado)
      this.imageUpload(data.id)      
      this.router.navigate(['home/' + data.id])
      });
  }
  
  // < METODO QUE INSTANCIA A VARIAVEL "uploadImage" >
  //
  // * Quando o input recebe um arquivo esse metodo e ativado e instancia "uploadImage"
  // * atraves de um evento que acessa um target.files[] que encontra as propriedades do arquivo.
  public onFileSelected(event: any) {
    this.uploadImage = event.target.files[0];

    console.log(this.uploadImage);
  }

  // < UPLOAD DE IMAGEM >
  // 
  // * Esse metodo filtra a variavel de tipagem "Type" atraves de um FormData.
  // * Chamando o ImageService para enviar o arquivo ao back-end por uma variavel de tipagem "Multipartfile".
  // * O resto da filtragem e feita pelo back-end.
  imageUpload(id: number) {
      
      // Cria a variavel de tipo FormData
      const imageFormData = new FormData()
      
      // Divide a variavel "uploadImage" dentro do FormData atraves do metodo "append"
      imageFormData.append('image', this.uploadImage, this.uploadImage.name)
      
      // Chama o metodo "postImage" pertencente ao ImageService
      // * "type" e o tipo de usuario que esta cadastrando a imagem
      // * "id" e o ID do usuario cadastrado
      // * "imageFormData" e o arquivo da imagem filtrado
      this.imageService.postImage('user', id, imageFormData)
      .subscribe((response: any) => {
        this.postResponse = response
        this.successResponse = this.postResponse.body.message
      });
  }



}
