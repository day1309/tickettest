import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { NgForm } from '@angular/forms';
import { Ticket } from '../../models/ticket';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  providers: [TicketService]
})
export class TicketsComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }

  addTicket(form: NgForm) {
    // console.log(form.value);
    if (form.value._id) {
      this.ticketService.putTicket(form.value)
          .subscribe(res => {
            this.resetForm(form);
            console.log('Datos actualizados');
            this.getTickets();
          });
    } else {
      this.ticketService.postTicket(form.value)
          .subscribe(res => {
          this.resetForm(form);
          console.log('Datos guardados');
          this.getTickets();
      });
    }
  }

  getTickets() {
    this.ticketService.getTickets()
        .subscribe(res => {
          this.ticketService.tickets = res as Ticket[];
          console.log(res);
        });
  }

  editTicket(ticket: Ticket) {
    this.ticketService.selectedTicket = ticket;
  }

  deleteTicket(_id: string) {
    if (confirm('Esta seguro?')) {
      this.ticketService.deleteTicket(_id)
        .subscribe(res => {
          console.log(res);
          this.getTickets();
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ticketService.selectedTicket = new Ticket();
    }
  }

}
