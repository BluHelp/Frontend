import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from '../models/contribution';
import { ContributionGet } from '../models/contribution-get';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  private endpoint = 'http://localhost:8080/comment/'
  constructor(private client: HttpClient) { }

  addComment(contribution: Contribution): Observable<Contribution> {
    return this.client.post<any>(this.endpoint, contribution);
  }
  getCommentsByProject(project: number): Observable<Array<ContributionGet>>{
    return this.client.get<Array<ContributionGet>>(this.endpoint + project);
  }
  getAllComments(): Observable<Array<ContributionGet>>{
    return this.client.get<Array<ContributionGet>>(this.endpoint);
  }
}
