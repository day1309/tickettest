import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  selectedTicket: Ticket;
  tickets: Ticket[];
  readonly URL_API = 'http://localhost:3000/api/tickets';

  constructor(private http: HttpClient) {
    this.selectedTicket = new Ticket();
   }

  getTickets() {
    return this.http.get(this.URL_API);
  }

  postTicket(ticket: Ticket) {
    return this.http.post(this.URL_API, ticket);
  }

  putTicket(ticket: Ticket) {
    return this.http.put(this.URL_API + `/${ticket._id}`, ticket);
  }

  deleteTicket(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
