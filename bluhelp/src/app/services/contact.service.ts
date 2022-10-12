import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private endpoint = 'http://localhost:8080/contact/'

  constructor(private client: HttpClient) { }

  addContact(contact: Contact): Observable<Contact>{
		return this.client.post<Contact>(this.endpoint , contact);
	}
}
