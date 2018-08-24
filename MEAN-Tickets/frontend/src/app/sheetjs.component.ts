/* xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
import { Component } from '@angular/core';
// import { Ticket } from './models/ticket';
import { TicketService } from './services/ticket.service';
import { TicketsComponent } from './components/tickets/tickets.component';
import * as XLSX from '../xlsx/xlsx';

function TicketParse(_id, ticket, rut, descripcion,fecha_creacion,fecha_cierre,sla,estado,baja,proceso,detalle,creador,canal,observacion,analista) {
	this._id = _id;
	this.ticket = ticket;
	this.rut = rut;
	this.descripcion = descripcion;
	this.fecha_creacion = fecha_creacion;
	this.fecha_cierre = fecha_cierre;
	this.sla = sla;
	this.estado = estado;
	this.baja = baja;
	this.proceso = proceso;
	this.detalle = detalle;
	this.creador = creador;
	this.canal = canal;
	this.observacion = observacion;
	this.analista = analista;
	}

@Component({
	selector: 'app-sheetjs',
	templateUrl: './sheetjs.component.html',
	providers: [TicketService]
})

export class SheetJSComponent {

	constructor(private ticketService: TicketService, private ticketsComponent: TicketsComponent) { }
	
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	arrayTickets = [];
	 
	
	onFileChange(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];

			/* save data */
			this.arrayTickets = XLSX.utils.sheet_to_json(ws);
			//console.log(this.arrayTickets);
			var i;
			
			for (i in this.arrayTickets) {
				var _id = "";
				var ticket = "";
				if(this.arrayTickets[i].Ticket != undefined) ticket =  this.arrayTickets[i].Ticket;
				var rut = "";
				if(this.arrayTickets[i].Rut != undefined) rut = this.arrayTickets[i].Rut;
				var descripcion = "";
				if(this.arrayTickets[i]["Descripción "] != undefined) descripcion = this.arrayTickets[i]["Descripción "]; 
				var fecha_creacion = "";
				if(this.arrayTickets[i]["Fecha Creación"] != undefined) fecha_creacion = this.arrayTickets[i]["Fecha Creación"];
				var fecha_cierre = "";
				if(this.arrayTickets[i]["Fecha Cierre"] != undefined) fecha_cierre = this.arrayTickets[i]["Fecha Cierre"];
				var sla = "";
				if(this.arrayTickets[i]["SLA "] != undefined) sla = this.arrayTickets[i]["SLA "];
				var estado = "";
				if(this.arrayTickets[i].Estado != undefined) estado = this.arrayTickets[i].Estado;
				var baja = "";
				if(this.arrayTickets[i].baja != undefined) baja = this.arrayTickets[i].baja;
				var proceso = "";
				if(this.arrayTickets[i]["Proceso "] != undefined) proceso = this.arrayTickets[i]["Proceso "];
				var detalle = "";
				if(this.arrayTickets[i]["Detalle "] != undefined) detalle = this.arrayTickets[i]["Detalle "];
				var creador = "";
				if(this.arrayTickets[i].Creador != undefined) creador = this.arrayTickets[i].Creador;
				var canal = "";
				if(this.arrayTickets[i].Canal != undefined) canal = this.arrayTickets[i].Canal;
				var observacion = "";
				if(this.arrayTickets[i]["Observación"] != undefined) observacion = this.arrayTickets[i]["Observación"];
				var analista = "";
				if(this.arrayTickets[i].Analista != undefined) analista = this.arrayTickets[i].Analista;

				var ticketJSON = new TicketParse(_id,ticket,rut,descripcion,
												 fecha_creacion,fecha_cierre,sla,
												 estado,baja,proceso,detalle,
												 creador,canal,observacion,analista);
				
				
				this.ticketService.postTicket(JSON.parse(JSON.stringify(ticketJSON)))
					.subscribe(res => {
						//console.log(res);
					});
				this.ticketsComponent.getTickets();
			}
			
		};
		reader.readAsBinaryString(target.files[0]);
	}

}
