import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private endpoint = 'http://localhost:8080/project/'

  constructor(private client: HttpClient) { }

  addProject(project: Project): Observable<Project>{
		return this.client.post<Project>(this.endpoint, project);
	}

}

