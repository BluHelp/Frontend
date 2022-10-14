import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { ProjectGet } from '../models/project-get';
import { ProjectView } from '../models/project-view';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private endpoint = 'http://localhost:8080/project/'

  constructor(private client: HttpClient) { }

  addProject(project: Project): Observable<Project>{
		return this.client.post<Project>(this.endpoint, project);
	}
  getProject(id: number): Observable<ProjectView>{
    return this.client.get<ProjectView>(this.endpoint + 'id/');
  }
  getTop4Projects(): Observable<Array<ProjectGet>>{
    return this.client.get<Array<ProjectGet>>(this.endpoint + '/default');
  }

}

