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
  getProjectsWithProgress(progress: number): Observable<Array<ProjectGet>>{
    return this.client.get<Array<ProjectGet>>(this.endpoint + 'progress/' + progress);

  }
  getProjectsWithCategory(category: number): Observable<Array<ProjectGet>>{
    return this.client.get<Array<ProjectGet>>(this.endpoint + 'category/id/' + category);
  }
  getProjectsWithDistrict(district: string): Observable<Array<ProjectGet>>{
    return this.client.get<Array<ProjectGet>>(this.endpoint + 'address/district' + district);
  }
  getProjectsWithCreator(name: string, surname: string): Observable<Array<ProjectGet>>{
    return this.client.get<Array<ProjectGet>>(this.endpoint + 'creator/name/surname' + name + surname);
  }
  getProjectsWithTitle(title: string): Observable<Array<ProjectGet>>{
    return this.client.get<Array<ProjectGet>>(this.endpoint + 'title/' + title);
  }
  getTop4Projects(): Observable<Array<ProjectGet>>{
    return this.client.get<Array<ProjectGet>>(this.endpoint + '/default');
  }


}

