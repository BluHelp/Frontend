import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from '../models/contribution';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  private endpoint = 'http://localhost:8080/comment/'
  constructor(private client: HttpClient) { }

  addContribution(contribution: Contribution): Observable<Contribution> {
    return this.client.post<any>(this.endpoint, contribution);
  }
  updateUser(contribution: Contribution, id: number): Observable<string> {
    return this.client.put<string>(this.endpoint + id, contribution);
  }
  deleteUser(id: number): Observable<string> {
    return this.client.delete<string>(this.endpoint + id);
  }
}
