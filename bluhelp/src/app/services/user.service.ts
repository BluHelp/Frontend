import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserGet } from '../models/user-get';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public getUser(): any {
    return localStorage.getItem('user')
  }

  public setUser(user: any){
    localStorage.setItem('user', JSON.stringify(user))
  }

  loginUser(holder:any): Observable<Number>{
    return this.client.post<Number>(this.endpoint + 'login', holder)
  }

  private endpoint = 'http://localhost:8080/user/'

  constructor(private client: HttpClient) { }

  addUser(user: User): Observable<any> {
    return this.client.post<any>(this.endpoint, user);
  }
  updateUser(user: User, id: number): Observable<string> {
    return this.client.put<string>(this.endpoint + id, user);
  }
  deleteUser(user: User, id: number): Observable<string> {
    return this.client.delete<string>(this.endpoint + id);
  }
  getUserWithProjects(id: number): Observable<UserGet> {
    return this.client.get<UserGet>(this.endpoint + id);
  }



}
