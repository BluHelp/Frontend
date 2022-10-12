import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint = 'http://localhost:8080/user/'

  constructor(private client: HttpClient) { }

  addUser(user: User): Observable<User>{
		return this.client.post<User>(this.endpoint , user);
	}
  updateUser(user: User, id: number){
    return this.client.put<User>(this.endpoint + 'id/' + id, user);
  }
  deleteUser(user: User, id: number){
    return this.client.delete<User>(this.endpoint + 'id/' + id);
  }

}
