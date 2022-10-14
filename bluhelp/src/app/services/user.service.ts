import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ProjectGet } from '../models/project-get';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint = 'http://localhost:8080/user/'

  constructor(private client: HttpClient) { }

  addUser(user: User): Observable<User>{
		return this.client.post<User>(this.endpoint, user);
	}
  updateUser(user: User, id: number): Observable<string>{
    return this.client.put<string>(this.endpoint + id, user);
  }
  deleteUser(user: User, id: number): Observable<string>{
    return this.client.delete<string>(this.endpoint + id);
  }
  getUserWithProjects(id: number): Observable<ProjectGet>{
    return this.client.get<ProjectGet>(this.endpoint + id);
  }

}
