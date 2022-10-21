import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectImage } from '../models/project-image';
import { UserPhoto } from '../models/user-photo';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  postImage(typePost: string, id: number, postData: any): Observable<any>{
    return this.http.post('http://localhost:8080/'+ typePost + '/image/' + id, postData);
  }
  getImage(idproject: number): Observable<ProjectImage>{
    return this.http.get<ProjectImage>('http://localhost:8080/project/image/'+ idproject);
  }
  getUserImage(iduser: number): Observable<UserPhoto>{
    return this.http.get<UserPhoto>('http://localhost:8080/user/image/'+ iduser);
  }
}
