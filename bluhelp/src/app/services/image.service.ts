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
  getUserImage(iduser: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/user/getImage/'+ iduser);
  }
  getProjectImage(idproject: number): Observable<any>{
    return this.http.get<any>('http://localhost:8080/project/getImage/'+ idproject);
  }
}
